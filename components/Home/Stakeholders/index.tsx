/* eslint-disable */
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Wrapper from "./style";
import Gradientbtn from "../../Reusable/Buttons/Gradientbtn";
import { useGlobal } from "global-contexts/Global";
interface HeroSection {}
// "
// Provide liquidity to earn organic yield generated through premium paid by the option buyers.
// Buy OTM options directly against our option vaults to hedge your risk.

// Customize strike price, expiry, and option size and exercise anytime before expiry whenever you are in money
// Earn yield by being a liqudity provider or tade custom options as per your viewpoint.
// "
const Stakeholders: React.FC<HeroSection> = () => {
  const { state } = useGlobal();
  const cards = [
    {
      name: "Option Traders",
      discription:
        "Customize strike price, expiry, and option size and exercise anytime before expiry whenever you are in money.",
    },
    {
      name: "Market Makers",
      discription: "Buy OTM Options directly against our liquidity pools to hedge your risk.",
    },
    {
      name: "Liquidity Providers",
      discription: "Provide liquidity to earn organic yield generated through premium paid by the option buyers.",
    },
  ];
  return (
    <Wrapper>
      <div className="flex full-width vph main-wrapper">
        <div className="stakeholder-wrapper flex-col content-center items-center">
          {cards.map((colab) => {
            return (
              <div className="card xxmr xxmb flex-col items-center">
                <div
                  className="grey-circle flex-col content-center items-center"
                  style={state.isDarkMode ? {} : { boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.25)" }}
                >
                  <img className="icon" src={`/Stakeholders/${colab.name}.svg`} />
                </div>
                <span className="name x-bold font-1 mf"> {colab.name} </span>
                <p className="sf desc text-center ">{colab.discription}</p>
              </div>
            );
          })}
        </div>
        <div className="hero-wrapper">
          <h1 className="txt mlf font2 zeromb tb">Protocol </h1>
          <h1 className="txt mlf font2 zeromt tb">stakeholders</h1>
          <h1 className="txt header mlf font2 zeromb s mob-text-center">Protocol stakeholders</h1>
          <div className="subtxt sf xlmb mob-text-center">
            Earn yield by being a liquidity provider of trade custom options as per your viewpoint.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stakeholders;
