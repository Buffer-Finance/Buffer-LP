/* eslint-disable */
import { useGlobal } from "global-contexts/Global";
import { useState, useEffect } from "react";
import Background from "./style";

interface IChains {}

const Chains: React.FC<IChains> = ({}) => {
  const { state } = useGlobal();
  const chains = state.isDarkMode
    ? [
        "Chains/binance.svg",
        "Chains/avalanche2.svg",
        "https://icodrops.com/wp-content/uploads/2021/10/Aurora_logo.jpeg",
        "Chains/nervos_faded_logo.svg",
      ]
    : [
        "Chains/binance.svg",
        "Chains/avalanche2-light.svg",
        "https://icodrops.com/wp-content/uploads/2021/10/Aurora_logo.jpeg",
        "Chains/nervos_faded_logo_light.svg",
      ];
  return (
    <Background>
      {chains.map((s, idx) => {
        return idx === 2 ? (
          <div className="image-wrapper-aurora">
            <img className="chain-img-aurora" src={s}></img>
            <span className="aurora-text">Aurora</span>
          </div>
        ) : (
          <div className="image-wrapper">
            <img className="chain-img" src={s}></img>
            {idx === 3 && <span>Aurora</span>}
          </div>
        );
      })}
    </Background>
  );
};

export default Chains;
