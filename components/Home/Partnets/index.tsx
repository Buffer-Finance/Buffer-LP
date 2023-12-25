import styled from "@emotion/styled";
import Section from "components/Reusable/Section";
import { Arbitrum } from "./Arbitrum";
import { Ethereum } from "./Ethereum";
import { Polygon } from "./Polygon";
import { Pyth } from "./Pyth";

const PartnersWrapper = styled.div`
  .logo {
    width: 180px;
    height: 60px;
  }
  .pyth-logo {
    width: 150px;
    height: 50px;
  }
  @media (max-width: 600px) {
    .logo {
      /* Adjust the styles for smaller screens here */
      width: 150px !important;
      height: 50px !important;
    }
    .pyth-logo {
      width: 120px !important;
      height: 40px !important;
    }
  }
`;
export const Partners = () => {
  return (
    <Section heading="Powered By">
      <PartnersWrapper className="flex justify-between  mx-[200px] my-[50px] sm:flex-col sm:justify-center items-center sm:gap-5">
        <Arbitrum className="logo" />
        <Ethereum className="logo" />
        <Polygon className="logo" />
        <Pyth className="pyth-logo" />
        <Arbitrum className="logo" />
      </PartnersWrapper>
    </Section>
  );
};
