/* eslint-disable */
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Wrapper from "./style";
import Gradientbtn from "../../Reusable/Buttons/Gradientbtn";
import { useGlobal } from "global-contexts/Global";
interface HeroSection {}
const TradeOptions: React.FC<HeroSection> = () => {
  const { state } = useGlobal();
  return (
    <Wrapper>
      <div className="flex full-width zph main-wrapper">
        <div className="hero-wrapper">
          <h1 className="txt mlf font2 mob-text-center">Trade options as if you are playing a game</h1>
          <div className="subtxt sf xlmb mob-text-center">
            Traders and speculators can monetize their viewpoint about an asset’s future price with our prediction game.
            It's super simple, fun, and accessible to everyone.
          </div>

          <Gradientbtn
            onClick={() => {
              window.open("https://app.buffer.finance", "_blank");
            }}
            class="btns btn-not-rounded tb"
          >
            Launch App
          </Gradientbtn>
        </div>
        <div className="pp">
          <img src={state.isDarkMode ? "/traderOptions-cropped.png" : "/traderOptions-cropped-light.png"} alt="Cards" />
        </div>
        <Gradientbtn
          onClick={() => {
            window.open("https://app.buffer.finance", "_blank");
          }}
          class="btns btn-not-rounded s btn-s"
        >
          Launch App
        </Gradientbtn>
      </div>
    </Wrapper>
  );
};

export default TradeOptions;
