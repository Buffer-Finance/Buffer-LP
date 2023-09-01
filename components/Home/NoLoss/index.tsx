import Gradientbtn from "components/Reusable/Buttons/Gradientbtn";
import React from "react";
import Wrapper from "../Main/style";
import { NoLossStyles } from "./styles";

export const NoLoss = () => {
  return (
    <Wrapper>
      <div className="flex full-width p-l p-r content-sbw main-wrapper">
        <div className="hero-wrapper">
          <h1 className="txt mlf lbold font2 mob-text-center">No Loss Tournament</h1>
          <div className="subtxt sf xlmb mob-text-center ">
            Not a pro-trader? Participate in trading tournaments and win rewards without the risk of losing your funds.
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
        <div className="no-loss">
          {/* <Image {...image} placeholder="blur" blurDataURL={b} alt="hero image" /> */}
          <img src={"/NoLoss.png"} alt="hero image" />
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
