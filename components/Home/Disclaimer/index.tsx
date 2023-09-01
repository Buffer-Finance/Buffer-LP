import styled from "styled-components";
import React from "react";
import { Warning } from "components/Reusable/Warning";
import { ArrowForward, East } from "@mui/icons-material";
const DisclaimerStyles = styled.div`
  grid-area: disclaimer;

  .disclaimer {
    background-color: #181920;
    justify-content: center;
    border-radius: 0px;
    padding: 8px;
    margin: 0;
    width: 100%;
    font-size: 13px;
    color: #ffffff;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 10px;
      text-align: left;
    }
  }
`;
export const Disclaimer = () => {
  return (
    <DisclaimerStyles>
      <Warning
        text={
          <div>
            🚀 Buffer v2.5 is live on&nbsp;
            <a href="https://app.buffer.finance/" target="_blank">
              <span className="underline underline-offset-2">Mainnet</span>
            </a>
            &nbsp; | 📜 Learn more about v2&nbsp;
            <a
              href="https://mirror.xyz/0xc730FbdFEb3e9dF76008A19962963cA4A2bd8de2/9v1ATLZoGXbzjLZWQVesWKMwHB4R7yI8XNQfVsyB21o"
              target="_blank"
            >
              <span className="underline underline-offset-2">here</span>
            </a>
            &nbsp; | ✨ To trade with $BFR as collateral visit the&nbsp;
            <a href="https://classic.app.buffer.finance/" target="_blank">
              <span className="underline underline-offset-2">classic version</span>
            </a>
          </div>
        }
        closeWarning={() => {}}
        shouldAllowClose={false}
        shouldRender={true}
        className="disclaimer"
      />
    </DisclaimerStyles>
  );
};
