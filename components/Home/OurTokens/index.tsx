import { Skeleton } from "@mui/material";
import Gradientbtn from "components/Reusable/Buttons/Gradientbtn";
import Section from "components/Reusable/Section";
import { useTokenomics } from "hooks/useTokenomics.ts";
import { Display } from "hooks/useTokenomics.ts/Components/Display";
import BFR from "public/Tokens/BFR";
import BLP from "public/Tokens/BLP";
import React from "react";
import FrontArrow from "./FrontArrow";
import { OurTokensStyles } from "./style";

const skeletonClasses = " ml-2 w-8 bg-1 transform-none";
const aprClasses = "!inline ml-2";
const tokenClasses =
  "token absolute z-10 top-[0] bottom-[0] right-[0] left-[0] m-auto transition-all duration-500 group-hover:-translate-y-1 ";

const getTokens = ({ bfr_apr, blp_apr }) => [
  {
    token: <BFR className={`${tokenClasses} group-hover:drop-shadow-[0px_0px_20px_#3772FF]`} />,
    head: "BFR",
    desc: "BFR is the utility and governance token that accrues up to 40% of the fees generated by the platform.",
    action: [
      {
        text: "Buy BFR",
        redirect: "https://app.uniswap.org/#/tokens/arbitrum/0x1a5b0aaf478bf1fda7b934c76e7692d722982a6d",
        // redirect: null,
      },
      {
        text: "Stake BFR",
        redirect: "https://app.buffer.finance/#/earn", // redirect: null,
      },
    ],
    apr: bfr_apr ? (
      <Display data={bfr_apr} unit="%" className={aprClasses} />
    ) : (
      <Skeleton className={skeletonClasses} />
    ),
  },
  {
    token: <BLP className={` ${tokenClasses} group-hover:drop-shadow-[0px_0px_20px_#269FB4]`} />,
    head: "BLP",
    desc: "BLP is the token issued to liquidity providers and accrues up to 70% of the fees generated by the platform.",
    action: [
      {
        text: "Add Liquidity",
        redirect: "https://app.buffer.finance/#/earn",
        // redirect: null,
      },
    ],
    apr: blp_apr ? (
      <Display data={blp_apr} unit="%" className={aprClasses} />
    ) : (
      <Skeleton className={skeletonClasses} />
    ),
  },
];

export const OurTokens = () => {
  const className = "";
  const { bfr_apr, blp_apr } = useTokenomics();

  return (
    <Section heading="Our Two Token Ecosystem " className="web:pt-8">
      <OurTokensStyles>
        {getTokens({ bfr_apr, blp_apr }).map(
          (token): JSX.Element => (
            <div className="card text-left group z-10" key={token.head}>
              <div className="relative ">
                {token.token}
                <div className="p-7 bg-1 rounded-[12px] transition-all duration-500 w-[116px] h-[116px]  sm:w-fit sm:h-fit"></div>
              </div>
              <div className="flex-col max-w-[340px] justify-between h-full">
                <div>
                  <div className="head">{token.head} </div>
                  <div className="text-f16 sm:text-f14 text-2 normal mb-5">
                    {token.desc}
                    <a
                      className={
                        className +
                        " text-A3E3FF ml-[6px]  hover:underline underline-offset-2   whitespace-nowrap cursor-pointer"
                      }
                      target="_blank"
                      href={
                        "https://buffer-finance.medium.com/introducing-all-new-bfr-staking-and-liqudity-pool-ba4b888ba470"
                      }
                      title="Coming soon"
                    >
                      Read More&nbsp;
                      <FrontArrow className="tml w-fit inline" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex mb-5 text-f16 sm:text-f14 text-2 normal w-full">
                    APR:
                    {token.apr}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {token.action.map((btn) => (
                      <a
                        key={btn.text}
                        style={{ all: "unset" }}
                        target={btn.redirect ? "_blank" : null}
                        href={btn.redirect}
                        title={!btn.redirect && "Coming Soon"}
                      >
                        <Gradientbtn class="btn-not-rounded">{btn.text}</Gradientbtn>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </OurTokensStyles>
    </Section>
  );
};
