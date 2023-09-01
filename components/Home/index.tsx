import Background from "./style";
import Main from "./Main";
import { NFT } from "./NFT";
import { OurTokens } from "./OurTokens";
import { KeyFeatures } from "./Features/KeyFeatures";
import { Warning, warningAtom } from "components/Reusable/Warning";
import { useAtom } from "jotai";
import FrontArrow from "./OurTokens/FrontArrow";

interface ILandingPage {}
let a;
const LandingPage: React.FC<ILandingPage> = ({}) => {
  const [isOpen, setIsOpen] = useAtom(warningAtom);
  return (
    <Background>
      <div className="w-full pl-3 pr-5">
      </div>
      <Main />
      <KeyFeatures />
      <OurTokens />
      <NFT />
    </Background>
  );
};

export default LandingPage;
