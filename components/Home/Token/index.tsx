/* eslint-disable */
import { useState, useEffect } from "react";
import GradientBtn from "../../Reusable/Buttons/Gradientbtn";
import Section from "../../Reusable/Section";
import Background from "./style";
import Outlinedbtn from "../../Reusable/Buttons/Outlinedbtn";
import dynamic from "next/dynamic";
interface ICollaborators {}

const UseCases: React.FC<ICollaborators> = ({}) => {
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
  return (
    // <Section heading="$ iBFR Token">
    <Background>
      {/* <p className="sub-text sf font1">A creative agency that lead and inspires</p> */}
      <div className="card xxxsmr flex content-sbw items-center xlph">
        <div className="details">
          <p className="xsf font1 top x-bold mob-text-center">{"Governance & utility"}</p>
          <h2 className="xmf mid mob-text-center">$iBFR Token</h2>
          <p className="sf bottom mob-text-center">
            $iBFR token forms the backbone of the Buffer protocol. Stake them to earn passive income or participate in
            governance
          </p>
          <Outlinedbtn
            class="tb"
            onClick={() => {
              window.open("https://docs.buffer.finance/tokenomics-1/usdibfr-tokens", "_blank");
            }}
          >
            Details
          </Outlinedbtn>
        </div>
        <div className="pp">
          <img src="/token2.png" alt="Cards" />
        </div>
        <Outlinedbtn
          class="s"
          onClick={() => {
            window.open("https://docs.buffer.finance/tokenomics-1/usdibfr-tokens", "_blank");
          }}
        >
          Details
        </Outlinedbtn>
        {/* <PieChart data={data} /> */}
      </div>
    </Background>
    // </Section>
  );
};

export default UseCases;
