import axios from "axios";
import { useReadCall } from "hooks/useReadCall";
import useSWR from "swr";
import { CHAIN_CONFIGS } from "../useReadCall/config";
import { CONTRACTS } from "./Config/addresses";
import bfrAbi from "./Config/BFR.json";
import { add, divide, gt, multiply } from "./Utils/stringArithmatics";
import toFixed from "./Utils/toFixed";
import RewardTrackerAbi from "./Config/RewardTracker.json";
import BlpAbi from "./Config/BufferBinaryIBFRPoolBinaryV2.json";

export const BASIS_POINTS_DIVISOR = "10000";
export const SECONDS_PER_YEAR = "31536000";

const ibfrPriceCache = {
  cache: "0",
};
const useIbfrPrice = () => {
  const getBfrPrice = async () => {
    const response = await axios.post("https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-dev", {
      query: '{\n  pool(id: "0xb529f885260321729d9ff1c69804c5bf9b3a95a5") {\n    token1Price\n  }\n}',
      variables: null,
      extensions: {
        headers: null,
      },
    });

    return response.data.data.pool.token1Price;
  };
  const getEthPrice = async () => {
    const response = await axios.post("https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-dev", {
      operationName: "pools",
      variables: {},
      query:
        'query pools {\n  pools(\n    where: {id_in: ["0x86d257cdb7bc9c0df10e84c8709697f92770b335", "0xf8dbd52488978a79dfe6ffbd81a01fc5948bf9ee", "0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248", "0xa850478adaace4c08fc61de44d8cf3b64f359bec"]}\n    block: {number: 25476355}\n    orderBy: totalValueLockedUSD\n    orderDirection: desc\n    subgraphError: allow\n  ) {\n    id\n    feeTier\n    liquidity\n    sqrtPrice\n    tick\n    token0 {\n      id\n      symbol\n      name\n      decimals\n      derivedETH\n      __typename\n    }\n    token1 {\n      id\n      symbol\n      name\n      decimals\n      derivedETH\n      __typename\n    }\n    token0Price\n    token1Price\n    volumeUSD\n    volumeToken0\n    volumeToken1\n    txCount\n    totalValueLockedToken0\n    totalValueLockedToken1\n    totalValueLockedUSD\n    __typename\n  }\n  bundles(where: {id: "1"}) {\n    ethPriceUSD\n    __typename\n  }\n}\n',
    });
    return response.data.data.bundles[0].ethPriceUSD;
  };

  const keys = ["bfrPriceInEth", "bfrPriceInUsd"];

  const { data, error } = useSWR(keys, {
    fetcher: async (calls) => {
      const bfrRes = await getBfrPrice();
      const ethPriceRes = await getEthPrice();
      return multiply(bfrRes, ethPriceRes);
    },
  });

  if (data && !error) {
    ibfrPriceCache.cache = toFixed(data, 8);
  }
  return ibfrPriceCache.cache;
};

const fromWei = (value: string, decimals: number = 18) => {
  return divide(value, decimals);
};

export const useTokenomics = () => {
  const contracts = CONTRACTS[CHAIN_CONFIGS.ARBITRUM.chainId];
  const bfrPrice = useIbfrPrice();
  const usd_decimals = 6;

  const getcalls = () => {
    return [
      // {
      //   address: contracts.iBFR,
      //   abi: bfrAbi,
      //   name: "balanceOf",
      //   params: [contracts.StakedBfrTracker],
      // },
      // {
      //   address: contracts.iBFR,
      //   abi: bfrAbi,
      //   name: "totalSupply",
      // },
      // {
      //   address: contracts.BLP,
      //   abi: bfrAbi,
      //   name: "balanceOf",
      //   params: [contracts.FeeBlpTracker],
      // },
      {
        address: contracts.BLP,
        abi: bfrAbi,
        name: "totalSupply",
      },
      {
        address: contracts.StakedBfrTracker,
        abi: RewardTrackerAbi,
        name: "totalSupply",
      },
      // {
      //   address: contracts.ES_BFR,
      //   abi: bfrAbi,
      //   name: "balanceOf",
      //   params: [contracts.StakedBfrDistributor],
      // },
      // {
      //   address: contracts.ES_BFR,
      //   abi: bfrAbi,
      //   name: "balanceOf",
      //   params: [contracts.StakedBlpDistributor],
      // },
      // {
      //   address: contracts.ES_BFR,
      //   abi: bfrAbi,
      //   name: "totalSupply",
      // },
      {
        address: contracts.FeeBfrTracker,
        abi: RewardTrackerAbi,
        name: "tokensPerInterval",
      },
      {
        address: contracts.FeeBfrTracker,
        abi: RewardTrackerAbi,
        name: "totalSupply",
      },
      {
        address: contracts.StakedBfrTracker,
        abi: RewardTrackerAbi,
        name: "tokensPerInterval",
      },
      {
        address: contracts.FeeBlpTracker,
        abi: RewardTrackerAbi,
        name: "tokensPerInterval",
      },
      {
        address: contracts.StakedBlpTracker,
        abi: RewardTrackerAbi,
        name: "tokensPerInterval",
      },
      // {
      //   address: contracts.BfrVester,
      //   abi: VesterAbi,
      //   name: "pairToken",
      // },
      // {
      //   address: contracts.BlpVester,
      //   abi: VesterAbi,
      //   name: "pairToken",
      // },
      {
        address: contracts.BLP,
        abi: BlpAbi,
        name: "totalTokenXBalance",
      },
      // {
      //   address: contracts.BLP,
      //   abi: BlpAbi,
      //   name: "availableBalance",
      // },
      {
        address: contracts.BLP,
        abi: BlpAbi,
        name: "INITIAL_RATE",
      },
    ];
  };

  let { data } = useReadCall(getcalls());
  // console.log(data, "readcall");

  let response = { bfr_apr: null, blp_apr: null };
  if (data && bfrPrice && gt(bfrPrice, "0")) {
    let [
      // totalStakedBFR,
      // totalBFRSupply,
      // stakedBlp,
      blpSupply,
      stakedBFRTrakerSupply,
      // stakedBfrDistributorBalance,
      // stakedBlpDistributorBalance,
      // esBFRSupply,
      feeBfrTrackerTokensPerInterval,
      feeBfrSupply,
      stakedBfrTrackerTokensPerInterval,
      feeBlpTrackerTokensPerInterval,
      stakedBlpTrackerTokensPerInterval,
      // bfrVesterPairToken,
      // blpVesterPairToken,
      blpTotalBalance,
      // maxTokenXToWithdraw,
      blpInitialRate,
    ] = data.flat();

    const blpPrice = blpSupply > 0 ? divide(blpTotalBalance, blpSupply) : divide("1", blpInitialRate);

    //BFR APR
    const stakedBfrTrackerAnnualRewardsUsd = fromWei(
      multiply(multiply(stakedBfrTrackerTokensPerInterval, SECONDS_PER_YEAR), bfrPrice)
    );
    const bfrAprForEsBfr = gt(multiply(stakedBFRTrakerSupply, bfrPrice), "0")
      ? divide(
          multiply(stakedBfrTrackerAnnualRewardsUsd, BASIS_POINTS_DIVISOR),
          fromWei(multiply(stakedBFRTrakerSupply, bfrPrice))
        )
      : "0";
    const feeBfrTrackerAnnualRewardsUsd = fromWei(
      multiply(feeBfrTrackerTokensPerInterval, SECONDS_PER_YEAR),
      usd_decimals
    );
    const bfrAprForRewardToken =
      feeBfrSupply > 0
        ? divide(
            multiply(feeBfrTrackerAnnualRewardsUsd, BASIS_POINTS_DIVISOR),
            fromWei(multiply(feeBfrSupply, bfrPrice))
          )
        : "0";

    const bfrAprTotal = add(bfrAprForRewardToken, bfrAprForEsBfr);

    //BLP APR
    const feeBlpTrackerAnnualRewardsUsd = fromWei(
      multiply(feeBlpTrackerTokensPerInterval, SECONDS_PER_YEAR),
      usd_decimals
    );
    const blpAprForRewardToken =
      blpSupply > 0
        ? divide(
            multiply(feeBlpTrackerAnnualRewardsUsd, BASIS_POINTS_DIVISOR),
            fromWei(multiply(blpSupply, blpPrice), usd_decimals)
          )
        : "0";
    const stakedBlpTrackerAnnualRewardsUsd = fromWei(
      multiply(multiply(stakedBlpTrackerTokensPerInterval, SECONDS_PER_YEAR), bfrPrice)
    );
    const blpAprForEsBfr =
      blpSupply > 0
      ? divide(
        multiply(stakedBlpTrackerAnnualRewardsUsd, BASIS_POINTS_DIVISOR),
        fromWei(multiply(blpSupply, blpPrice), usd_decimals)
          )
          : "0";
    console.log(`[blp]blpSupply: `,blpSupply);
    const blpAprTotal = add(blpAprForRewardToken, blpAprForEsBfr);
    console.log(`[blp]blpAprForEsBfr: `,blpAprForEsBfr);
    console.log(`[blp]AprForRewardToken: `,blpAprForRewardToken);
    console.log(`[blp]response: `,response);
    response = { bfr_apr: fromWei(bfrAprTotal, 2), blp_apr: fromWei(blpAprTotal, 2) };
  }
  console.log(response);
  return (response = bfrPrice && response ? response : { bfr_apr: null, blp_apr: null });
};
