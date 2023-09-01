/* eslint-disable */
import { useGlobal } from "global-contexts/Global";
import { useState, useEffect } from "react";
import Section from "../../Reusable/Section";
import Background from "./style";
//deploy
interface ICollaborators {}
const collaborators = ["Lithium", "BSC Daily", "Cryptobuddy", "Super launcher", "Berry", "BSC News"];

const Collaborators: React.FC<ICollaborators> = ({}) => {
  const { state } = useGlobal();
  return (
    <Section heading="Collaborators">
      <Background>
        {collaborators.map((colab) => {
          return (
            <div className="card flex-col items-center">
              <div
                className="grey-circle flex content-center items-center"
                style={state.isDarkMode ? {} : { boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.25)" }}
              >
                <img className="icon" src={`/Collaborators/${colab}.svg`} />
              </div>
              <span className="desc font-1"> {colab} </span>
            </div>
          );
        })}
      </Background>
    </Section>
  );
};

export default Collaborators;
