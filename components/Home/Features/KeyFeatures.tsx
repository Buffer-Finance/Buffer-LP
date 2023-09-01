import Section from "components/Reusable/Section";
import { useInteractionEffect } from "components/useInteractionObserver";
import { useAtom } from "jotai";
import { useRef } from "react";
import { showNavbarTradeAtom } from "../Main";

const shadowColorMapping = {
  0: "#ed931a33",
  1: "#33f3ff40",
  2: "#b85fff40",
  3: "#fa5fd640",
};

const ImageClassName =
  "transition-all ease-out duration-500 top-[20px] rounded-[24px] relative z-50  left-[0] right-[0] m-auto group-hover:top-[35px] ";
const BackDropClassName =
  "absolute w-2/3 h-[90px] blur-2xl opacity-70 m-auto right-[0] left-[0] -top-[105px] group-hover:-top-[75px]";
const dataArr = [
  {
    name: "Trade Defined Outcomes",
    desc: "Trade with a defined risk-reward ratio without the risk of liquidation",
    image: (
      <img
        src={"/KeyFeatures/key1.png"}
        className={ImageClassName + ` group-hover:shadow-[0px_0px_40px_1px_#ed931a33_inset]`}
      />
    ),
    backDrop: <div className={BackDropClassName + " bg-[#ed931a33]"}></div>,
  },
  {
    name: "Simple and gamified",
    desc: "Trade short-term price volatility of any market simply by selecting up/down ",
    image: (
      <img
        src={"/KeyFeatures/key2.png"}
        className={ImageClassName + ` group-hover:shadow-[0px_0px_40px_1px_#33f3ff40_inset]`}
      />
    ),
    backDrop: <div className={BackDropClassName + " bg-[#33f3ff40]"}></div>,
  },
  {
    name: "Access diverse markets",
    desc: "Trade market volatility of crypto, forex, stock completely on-chain",
    image: (
      <img
        src={"/KeyFeatures/key3.png"}
        className={ImageClassName + ` group-hover:shadow-[0px_0px_40px_1px_#b85fff40_inset]`}
      />
    ),
    backDrop: <div className={BackDropClassName + " bg-[#b85fff40]"}></div>,
  },
  {
    name: "Non-custodial & Trustless",
    desc: "Trade directly from your wallet against a decentralized price feed without the risk of any scam wicks.",
    image: (
      <img
        src={"/KeyFeatures/key4.png"}
        className={ImageClassName + ` group-hover:shadow-[0px_0px_40px_1px_#fa5fd640_inset]`}
      />
    ),
    backDrop: <div className={BackDropClassName + " bg-[#fa5fd640]"}></div>,
  },
];

export const KeyFeatures = () => {
  const [show, setShow] = useAtom(showNavbarTradeAtom);
  const ref = useRef();
  useInteractionEffect(() => {
    console.log(`true: `, true);

    setShow(true);
  }, [ref]);
  return (
    <Section heading="Key Features">
      <div className="flex sm:flex-col sm:items-center justify-center gap-7 sm:gap-5 my-8 sm:my-5 transition-all duration-200 flex-wrap tb:w-[610px] m-auto">
        {dataArr.map((data, index) => {
          return (
            <div key={index} className="even:mt-8 sm:even:mt-[0px] group">
              {data.image}

              <div className="relative bg-[rgba(20,15,26,.66)] overflow-hidden rounded-[12px] w-fit max-w-[285px] sm:max-w-[250px] h-[265px] sm:max-h-[230px] text-center px-6 pt-[57px] sm:pt-[45px]">
                {data.backDrop}
                <div className="text-1 text-f25 sm:text-f20 font-normal capitalize">{data.name}</div>
                <div className="text-2 text-f16 sm:text-f14 font-normal mt-5">{data.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
