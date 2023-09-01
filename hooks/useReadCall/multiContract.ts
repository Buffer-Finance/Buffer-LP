import { ethers } from "ethers";
import MultiCallV2Abi from "./Multicallv2.json";
import { multiCall } from "./config";
import getContract from "./getContract";
import { CHAIN_CONFIGS } from "./config";
import Web3 from "web3";
export interface Call {
  address: string; // Address of the contract
  name: string; // Function name on the contract (example: balanceOf)
  params?: any[]; // Function params
  abi?: any[]; // Abi of the contract
}

export const multicallv2 = async (calls: Call[]) => {
  const arbitrumChainConfig = CHAIN_CONFIGS.ARBITRUM;
  if (!calls.length) return null;
  const calldata = calls.map((call) => {
    const itf = ethers.utils && new ethers.utils.Interface(call.abi);
    return [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)];
  });

  const contract = getContract(
    MultiCallV2Abi,
    multiCall[arbitrumChainConfig.chainId],
    new Web3(arbitrumChainConfig.rpcUrls[0])
  );

  const returnData = await contract["methods"]["aggregate"](calldata).call();

  if (typeof returnData === "undefined") return;
  const res = returnData.returnData.map((call, i) => {
    const [data] = call;
    if (!call) return null;
    const itf = new ethers.utils.Interface(calls[i].abi);
    return itf.decodeFunctionResult(calls[i].name, call);
  });
  return res;
};
