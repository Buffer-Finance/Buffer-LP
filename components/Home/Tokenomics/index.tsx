import { useState, useEffect } from "react";
import Section from "../../Reusable/Section";
import Background from "./style";
import dynamic from "next/dynamic";

interface ICollaborators {}
const data = [
  { name: "Seed sale", value: 14, color: "#B89159" },
  { name: "Liquidity and Liquidity mining", value: 20, color: " #6CA299" },
  { name: "Advisors & Partnerships", value: 10, color: "#9DD2C5" },
  { name: "IDO", value: 11, color: "#40748F" },
  { name: "DAO Allocation", value: 5, color: "#E0BF78" },
  { name: "Team", value: 10, color: "#DAA9B6" },
  { name: "rBFR (Buffer LPs) staking rewards", value: 5, color: "#89C9DC" },
  { name: "Treasury", value: 10, color: "#40748F" },
  { name: "Rewards & Marketing", value: 13.5, color: "#5fa7a5" },
  { name: "Airdrop + LeaderBoard", value: 1.5, color: "#35afad" },
];
const PieChart = dynamic(() => import("./Piechart"), {
  ssr: false,
});

const Collaborators: React.FC<ICollaborators> = ({}) => {
  return (
    <Section heading="Tokenomics">
      <Background>
        <div className="outerContainer">
          <div className="chartt">
            <PieChart data={data} />
          </div>
          <div className="left">
            {data.slice(data.length / 2).map((token, index) => (
              <div className={`legends item${index}`} key={index}>
                <div className={`data tb`}>
                  <span className="value">{`${token.value}%`}</span>
                  <span className="label">{`${token.name}`}</span>
                </div>
                <span
                  className="gradient rtGradient"
                  style={{
                    background: token.color,
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <div className="data s">
                  <span className="value">{`${token.value}%`}</span>
                  <span className="label">{`${token.name}`}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            {data.slice(0, data.length / 2).map((token, index) => (
              <div className={`legends item${index}`} key={index}>
                <span
                  className={`gradient ltGradient`}
                  style={{
                    background: token.color,
                    // margin: 0,
                    // marginRight: "15px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <div className="data">
                  <span className="value">{`${token.value}%`}</span>
                  <span className="label">{`${token.name}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Background>
    </Section>
  );
};

export default Collaborators;
