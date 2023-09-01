export const toHex = (num: number) => {
  return `0x${num.toString(16)}`;
};

export const CHAIN_CONFIGS = {
  ARBITRUM: {
    img: "/Chains/ARBITRIUM.png",
    env: "arbitrum-main",
    chainId: "42161",
    defaultAsset: "ETH",
    chainIdHex: toHex(42161),
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://arbiscan.io/"],
    chainName: `Arbitrum Mainnet`,
    displayName: "Arbitrum",
    name: "ARBITRUM",
    minGasPrice: 0.17 * 1e9,
    nativeAsset: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
      img: "/Chains/ARBITRIUM.png",
      category: "Crypto",
    },
    supportedPages: [1, 1, 1, 1, 1, 0],
  },
};

export const multiCall = {
  56: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
  97: "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576",
  71393: "0x8BE87Ac9376c33C64583d0CD512227151FeD5bfe",
  80001: "0xa1D6a0B3bE26FA898340b53d130FaAc855B87545",
  43113: "0x3525056b441957683c646e60f155A5db6390144F",
  43114: "0x115452aF3dD96809F61777010215219B8B30819D",
  3: "0x53c43764255c17bd724f74c4ef150724ac50a3ed",
  4002: "0x0f0142450b65E562dbe871975da7ED0974e20D0e",
  421613: "0x8ea98eFC38dE6739FBDC93dA7789c926D54d72c6",
  42161: "0x7A7443F8c577d537f1d8cD4a629d40a3148Dd7ee",
};
