import Section from "../../Reusable/Section";
import Background from "./style";

interface ICollaborators {}
const usecases = [
  {
    name: "Customizable options",
    discription:
      "Buy call or put options with customized strike prize, option size, and expiry date as per your viewpoint.",
    tag: "Launch",
    onClick: () => {
      window.location.href = "https://app.buffer.finance/options";
    },
  },
  {
    name: "Prediction cards",
    discription:
      "Participate in prediction games by predicting BNB price movement and place your bet directly against a liquidity pool - (No counterparty required).",
    tag: "Launch",
    onClick: () => {
      window.location.href = "https://app.buffer.finance/prediction-game";
    },
  },
  {
    name: "Insurance",
    discription:
      "Buy insurance on your BNB holding to protect yourself from sudden price fluctuation.",
    tag: "Coming Soon",
    onClick: () => {},
  },
];

const Products: React.FC<ICollaborators> = ({}) => {
  return (
    <Section heading="Products">
      <Background>
        {usecases.map((colab, index) => {
          return (
            <div
              className="card xxxsmr flex-col items-center"
              onClick={colab.onClick}
            >
              <div className="image-bg flex items-center content-center">
                <img src={`/Products/${colab.name}.svg`} key={colab.name} />
                <div className={`font1 x-bold tag tag-${index}`}>
                  {colab.tag}
                </div>
              </div>
              <div className="content-bg flex-col ">
                <span className="name mf font2"> {colab.name} </span>
                <p className="sf desc">{colab.discription}</p>
              </div>{" "}
            </div>
          );
        })}
      </Background>
    </Section>
  );
};

export default Products;
