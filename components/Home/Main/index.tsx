/* eslint-disable */
import React, { useRef } from "react";
import Wrapper from "./style";
import Gradientbtn, { SecondaryBtn } from "../../Reusable/Buttons/Gradientbtn";
import { useInteractionEffect } from "components/useInteractionObserver";
import { atom, useAtom } from "jotai";
import { Slider } from "./Slider";

const SliderArray = [
  "Trade Forex",
  "Trade Crypto",
  "Trade Commodities",
  "24x7 Trading",
  "Non-custodial",
  "No Signups Required",
];

interface HeroSection {}

export const showNavbarTradeAtom = atom(false);
const Main: React.FC<HeroSection> = () => {
  // const [count, setCount] = useState(1);
  // const onHeaderTyped = (): void => {
  //   console.log("test");
  //   setTimeout(() => {
  //     setCount(0);
  //     setCount(1);
  //   }, 100);
  // };
  const ref = useRef(null);
  const bref = useRef(null);
  const [show, setShow] = useAtom(showNavbarTradeAtom);

  useInteractionEffect(
    (mounted) => {
      setShow(!mounted);
    },
    [bref]
  );

  const onMouseMove = (event) => {
    const cardElement = document.getElementById("hero-image");
    const dim = cardElement.getBoundingClientRect();
    const card = {
      halfHeight: dim.width / 2,
      halfWidth: dim.height / 2,
    };
    const YRANGE = 10;
    const midW = dim.left + dim.width / 2;

    let degsToRotateY = (event.clientX - midW) / 100;
    let degsToRotateX = ((card.halfHeight - event.clientY) * 30) / card.halfHeight;
    if (degsToRotateX > YRANGE) {
      degsToRotateX = YRANGE;
    } else if (degsToRotateX < -YRANGE) {
      degsToRotateX = -YRANGE;
    }
    let style = `rotateX(${degsToRotateX}deg) rotateY(${degsToRotateY}deg)`;
    cardElement.style.transform = style;
  };

  const registerEffect = () => {
    document.addEventListener("mousemove", onMouseMove);
  };
  const unregisterEffect = () => {
    // document.removeEventListener("mousemove", onMouseMove);
  };

  return (
    <Wrapper>
      <div className="full-width content-sbw main-wrapper persp">
        <div className="max-w-screen-sm m-auto text-center hero-wrapper">
          <h1 className="txt text-f64 font2 mob-text-center margin-nil font-medium pt-3 sm:pt-[0] capitalize">
            Options trading <span className="text-primary"> simplified.</span>
            {/* {count ? (
              <Typist
                avgTypingDelay={200}
                className="gradient_txt"
                onTypingDone={onHeaderTyped}
                cursor={{ element: "|" }}
              >
                {"Simple."}
                <Typist.Backspace count={7} delay={1000} />
                {"Gamified."}
                <Typist.Backspace count={9} delay={1000} />
                {"Decentralized."}
                <Typist.Backspace count={14} delay={1000} />
              </Typist>
            ) : (
              ""
            )} */}
          </h1>
          {/* <div className="mt-5 subtxt text-f18 text-2 sm:text-f16">
            Buffer Finance is a non-custodial, exotic options trading platform built to trade short-term price
            volatility and hedge risk of high-leverage positions.
          </div>
          <Slider SliderArray={SliderArray} />
          <div className="flex flex-wrap items-stretch justify-center gap-3 whitespace-nowrap" ref={bref}>
            <Gradientbtn
              onClick={() => {
                window.open("https://app.buffer.finance/", "_blank");
              }}
              class="btns btn-not-rounded font-semibold w-[165px]"
            >
              Trade
            </Gradientbtn>
            <SecondaryBtn
              onClick={() => {
                window.open("https://earn.buffer.finance/", "_blank");
              }}
              class="btn-not-rounded btns w-[165px] font-medium"
              disabled={false}
            >
              Earn Yield
            </SecondaryBtn>
          </div> */}
        </div>

        <div
          className="pp relative !mt-8 traa"
          id="hero-image"
          onMouseEnter={registerEffect}
          onMouseLeave={unregisterEffect}
        >
          <img
            src={"/Hero/bitcoin.png"}
            alt="hero image"
            className="max-w-[70px] sm:max-w-[25px] tb:max-w-[45px] max-h-[70px] absolute z-10 top-1/3 -left-[34px] tab:-left-[10px] animate-[up-down_3.5s_ease-in-out_infinite]"
          />
          <img
            src={"/Hero/avalanche.png"}
            alt="hero image"
            className="absolute z-10 -top-[10px] left-1/3 animate-[bounce_3s_ease-in-out_infinite] max-w-[57px] sm:max-w-[25px] tb:max-w-[40px] max-h-[57px]"
          />
          <img
            src={"/Hero/eth.png"}
            alt="hero image"
            className="max-w-[57px] sm:max-w-[25px] tb:max-w-[40px] max-h-[57px] absolute z-10 bottom-1/3 -right-[28px] tab:-right-[10px] animate-[up-down_2.5s_ease-in-out_infinite]"
          />
          <img
            src={"/Hero/polygon.png"}
            ref={ref}
            alt="hero image"
            className="max-w-[70px] sm:max-w-[25px] tb:max-w-[45px] max-h-[70px] absolute z-10 -bottom-[35px] right-1/3 animate-[bounce_2s_ease-in-out_infinite]"
          />
          <img src={"/HeroImage.png"} alt="hero image" />
        </div>

        {/* <Social /> */}
      </div>
    </Wrapper>
  );
};

export default Main;
