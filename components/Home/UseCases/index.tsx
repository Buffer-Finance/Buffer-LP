/* eslint-disable */
import { useState, useEffect } from "react";
import Section from "../../Reusable/Section";
import Background from "./style";
import Image from "next/image";
import { useGlobal } from "global-contexts/Global";
interface ICollaborators {}
const usecases = [
  {
    name: "Traders",
    discription:
      "Buy Put option if you have an open long position on BNB.  Buy Call options if you have an open short position on BNB. Trade customizable options based on your viewpoint of BNB price movement.",
  },
  {
    name: "Speculator",
    discription:
      "Speculators can participate in our BNB price prediction games by betting on whether the price will go up or down by just paying a betting fee against a liquidity pool without the need of a counterparty.",
  },
  {
    name: "Insurance",
    discription:
      "We will be setting up Insurance funds for Launchpads and Service providers who hold or operate with a significant amount of BNBs to protect them from price fluctuations.",
  },
];

const UseCases: React.FC<ICollaborators> = ({}) => {
  const { state } = useGlobal();
  return (
    <Section heading="Use Cases" bg="var(--bg-2)">
      <Background>
        {usecases.map((colab, index) => {
          return (
            <div
              className={`card xxxsmr flex-col flex-end items-center xlph ${index === 1 ? "fixedHeight" : ""}`}
              style={state.isDarkMode ? { background: "var(--bg-8)" } : {}}
            >
              <div className={`illustration illustration${index}`}>
                {" "}
                <img alt="Picture of the author" src={`/UseCases/${colab.name}.png`} className="imaage" />
              </div>

              <span className="name mf font2"> {colab.name} </span>
              <p className="sf desc text-center ">{colab.discription}</p>
            </div>
          );
        })}
      </Background>
    </Section>
  );
};

export default UseCases;
