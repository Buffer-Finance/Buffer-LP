/* eslint-disable */
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Wrapper from "./style";
import Gradientbtn from "../../Reusable/Buttons/Gradientbtn";
interface HeroSection {}
const Roadmap: React.FC<HeroSection> = () => {
  // console.log();

  const cards = [
    {
      title: "Phase-1",
      todo: [
        { name: "Call boosters on multiple assets", done: true },
        { name: "Buffer Prime NFT launch", done: true },
        { name: "$iBFR centric liquidity for prediction & option market", done: true },
        { name: "The secondary market for prediction and options NFTs", done: true },
      ],
    },
    {
      title: "Phase-2",
      todo: [
        { name: "V2 launch", done: true },
        { name: "Buffer Treasury setup", done: true },
        { name: "Buffer Pro for DAO treasury management", done: true },
        { name: "Option vouchers launch", done: true },
      ],
    },
    {
      title: "Phase-3",
      todo: [
        {
          name: "Expansion of Buffer Pro services",
          done: false,
        },
        { name: "Ve-tokenomics introduction", done: false },
        { name: "Buffer DAO setup for treasury management", done: false },

        { name: "Increased decentralization", done: false },
      ],
    },
    {
      title: "Phase-4",
      todo: [
        { name: "Development of protocol owned liquidity", done: true },
        { name: "Protocol owned liquidity pools for writing options", done: true },
        { name: "CEX listing", done: false },
        { name: "Further decentralization", done: false },
      ],
    },
  ];
  return (
    <Wrapper>
      <div className="flex full-width vph main-wrapper ">
        <div className="hero-wrapper">
          <h1 className="txt mlf font2 mob-text-center">Roadmap</h1>
          <div className="subtxt sf xlmb mob-text-center">
            The roadmap is the phase-wise development plan for Buffer Finance for the year 2022
          </div>
        </div>
        <div className="stakeholder-wrapper flex-col">
          {cards.map((data) => {
            return (
              <div className="card flex-col">
                <span className="name lbold font-1 mf"> {data.title} </span>
                <ul>
                  {data.todo.map((value, indeX) => (
                    <li className="sf desc" key={indeX}>
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Roadmap;
