import { Launch } from "@mui/icons-material";
import { Warning } from "components/Reusable/Warning";
import styled from "styled-components";
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
          <div className="w-fit flex items-center m-auto">
            <span className="bg-[#232334] text-[#10D2FF] text-f11 leading-[16px] px-3 rounded-[6px] font-semibold mr-3">
              New
            </span>
            <a href="https://app.buffer.finance/#/leaderboard/galxe" className="m-auto">
              <img
                src="https://res.cloudinary.com/dtuuhbeqt/image/upload/Leaderboard/bbb.png"
                className="mr-3 inline h-[20px] w-[20px] sm:h-[15px] sm:w-[15px]"
              />
              <span className="text-f14 font-extrabold text-[#232334] leading-[21px] sm:text-[11px] sm:leading-[12px]">
                Complete weekly Galxe tasks & trade to win from $14,000 prize pot in the buffer competition.
              </span>
              <Launch className="scale-[0.85] text-[#232334] ml-1 mb-1" />
            </a>
          </div>
        }
        closeWarning={() => {}}
        shouldRender={true}
        shouldAllowClose={false}
        className="disclaimer !bg-[#10D2FF] !text-[#232334]"
      />
    </DisclaimerStyles>
  );
};
