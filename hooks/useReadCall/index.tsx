import { ethers } from "ethers";
import useSWR from "swr";
import { multicallv2 } from "./multiContract";
export const useReadCall = (calls) => {
  return useSWR(calls && [calls], {
    fetcher: async (calls) => {
      if (!calls) return null;

      let returnData = await multicallv2(calls);

      if (returnData) {
        let copy = structuredClone(returnData);
        convertBigToNum(copy);
        return copy;
      }
      return null;
    },
  });
};

export function convertBigToNum(data) {
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "object" && !data[key].type) {
      convertBigToNum(data[key]);
    }

    if (data[key]._isBigNumber) {
      data[key] = ethers.utils.formatUnits(data[key]._hex, 0);
    }
  });
}
