import { warningAtom } from "components/Reusable/Warning";
import { useAtom } from "jotai";
import { KeyFeatures } from "./Features/KeyFeatures";
import Main from "./Main";
import { NFT } from "./NFT";
import { OurTokens } from "./OurTokens";
import { Partners } from "./Partners";
import Background from "./style";

interface ILandingPage {}
let a;
const LandingPage: React.FC<ILandingPage> = ({}) => {
  const [isOpen, setIsOpen] = useAtom(warningAtom);
  return (
    <Background>
      <div className="w-full pl-3 pr-5"></div>
      <Main />
      <Partners />
      <KeyFeatures />
      <OurTokens />
      <NFT />
    </Background>
  );
};

export default LandingPage;
