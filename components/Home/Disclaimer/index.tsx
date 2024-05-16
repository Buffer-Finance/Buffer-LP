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
            <a
              href="https://mirror.xyz/0xc730FbdFEb3e9dF76008A19962963cA4A2bd8de2/QBllBUvSHl8QZHUpJyo5U0I_xb1MaxXgeDEK3Uyf9ZQ"
              target="_blank"
              className="m-auto"
            >
              <span className="text-f14 font-extrabold text-[#232334] leading-[21px] sm:text-[11px] sm:leading-[12px]">
                Buffer V2.6 is live. Unlock prediction markets with the best in-class UX. Learn more!
              </span>
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
