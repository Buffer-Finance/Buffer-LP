/* eslint-disable */
import { useGlobal } from "global-contexts/Global";
import Section from "../../Reusable/Section";
import Background, { Card } from "./style";

interface IFeatures {}
const data = [
  {
    name: "Pre-defined Risk Reward",
    desc: "Trade pre-defined outcomes without the risk of liquadation",
  },
  {
    name: "Easy to understand",
    desc: "Trade by selecting up/down for price movement in a given timeframe",
  },
  {
    name: "Access diverse markets",
    desc: "Trade market volatility of crypto, forex, stock completely on-chain",
  },

  {
    name: "Gamified interface",
    desc: "Participate in tournamanetrs and competitions and win rewards",
  },
];

const Features: React.FC<IFeatures> = ({}) => {
  const { state } = useGlobal();
  return (
    <Section heading="Why Trade On Buffer" bg="rgba(36, 39, 49, 0.4)">
      <Background>
        {data.map((s, idx) => (
          <Card key={idx}>
            <div className={`img-background feature-${idx}`}>
              <span
                className="features"
                style={state.isDarkMode ? { filter: "drop-shadow(0 0 3.65px #f7931a)" } : {}}
              >{`${idx + 1}.`}</span>
            </div>

            <div className="name">{s.name}</div>
            <div className="desc">{s.desc}</div>
          </Card>
        ))}
      </Background>
    </Section>
  );
};

export default Features;
