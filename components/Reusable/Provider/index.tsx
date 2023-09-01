import Figure from "components/Home/Figure";
import Navbar from "../Navbar";
import styled from "styled-components";
import { SWRConfig } from "swr";
import axios from "axios";
import { Disclaimer } from "components/Home/Disclaimer";
const DELAY = 100;
const TOTAL_STRIPS = 14;

const updateStyle = () => {
  let eachStyle = "";
  for (let i = 0; i < TOTAL_STRIPS; i++) {
    eachStyle += `
      &:nth-child(${i}) {
        animation-delay:${i * DELAY}ms;
      }

    `;
  }
  console.log(`eachStyle: `, eachStyle);

  return eachStyle;
};
const FigureBg = styled.div`
  position: absolute;
  top: 40px;
  z-index: 0;
  width: 100%;
  height: 80%;
  .waves {
    @media (min-width: 600px) {
      #wave {
        animation: breath-animation 20s infinite linear;
        transform-origin: center;
        ${updateStyle()}
      }
    }
  }
  @keyframes breath-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: translate(10%, 20%) rotate(20deg);
    }
    20% {
      transform: translate(-10%, -20%) rotate(-40deg);
    }
    30% {
      transform: translate(20%, 10%) rotate(40deg);
    }
    40% {
      transform: translate(10%, -20%);
    }
    50% {
      transform: translate(-10%, 20%);
    }
    60% {
      transform: translate(-10%, -8%);
    }
    70% {
      transform: translate(10%, 20%);
    }
    80% {
      transform: translate(10%, -20%) rotate(10deg);
    }
    90% {
      transform: translate(-10%, -20%) rotate(-10deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(0deg);
    }
  }
`;

const options = {
  fetcher: (url) => axios.get("" + url).then((res) => res.data),
  refreshInterval: 1000,
};
const Provider: React.FC<any> = ({ children }) => {
  return (
    <div className="background">
      <SWRConfig value={options}>
        <FigureBg>
          <Figure />{" "}
        </FigureBg>
        <Disclaimer />
        <Navbar />
        <div className="body-bg">{children}</div>
      </SWRConfig>
    </div>
  );
};

export default Provider;
