import styled from "@emotion/styled";
import Section from "components/Reusable/Section";
import { Alchemy } from "./Alchemy";
import { Arbitrum } from "./Arbitrum";
import { Ethereum } from "./Ethereum";
import { Polygon } from "./Polygon";
import { Pyth } from "./Pyth";
import { AlchemySmall } from "./Small/Alchemy";
import { ArbitrumSmall } from "./Small/Arbitrum";
import { EthereumSmall } from "./Small/Ethereum";
import { PolygonSmall } from "./Small/Polygon";
import { PythSmall } from "./Small/Pyth";

const PartnersWrapper = styled.div`
  .logo {
    width: 180px;
    height: 60px;
  }
  .pyth-logo {
    width: 150px;
    height: 50px;
  }
  .smol {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 600px) {
    .smol {
      display: none;
    }
  }
`;
export const Partners = () => {
  return (
    <Section heading="Powered By">
      <PartnersWrapper className="flex justify-between gap-5  mx-[200px] mt-[50px] mb-[86px] sm:mx-[2rem] tb:mx-[4rem] items-center ">
        <Arbitrum className="sm:hidden logo" />
        <Ethereum className="sm:hidden logo" />
        <Polygon className="sm:hidden logo" />
        <Pyth className="sm:hidden pyth-logo scale-95" />
        <Alchemy className="sm:hidden logo" />
        <ArbitrumSmall className="smol " />
        <EthereumSmall className="smol " />
        <PolygonSmall className="smol " />
        <PythSmall className="smol scale-95" />
        <AlchemySmall className="smol " />
      </PartnersWrapper>
    </Section>
  );
};
