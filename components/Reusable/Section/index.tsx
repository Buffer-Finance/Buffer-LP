import { ReactNode } from "react";
import Background from "./style";

interface ISection {
  heading: string;
  children: ReactNode;
  bg?: string;
  className?: string;
  ref?: HTMLDivElement;
  isComingSoon?: boolean;
}

const Section: React.FC<ISection> = ({ heading, children, bg, className, ref, isComingSoon = false }) => {
  return (
    <Background bg={bg} className={className} ref={ref}>
      <div className="flex justify-center"></div>
      <div className="flex items-center justify-center text-1 text-f48 font-medium section-heading w-fit mx-auto whitespace-nowrap flex-wrap mb-1">
        {heading}
        {isComingSoon && <ComingSoon />}
      </div>
      {children}
    </Background>
  );
};

export default Section;

const ComingSoon = () => {
  return (
    <div className="text-f20 font-normal px-4 py-2 rounded-[8px] bg-red soon w-fit h-fit ml-4 mt-2 cursor-pointer hover:translate-y-[-2px] transition-all">
      <a href="https://optopi.buffer.finance/ARBITRUM" target={'_blank'}>Mint Now</a></div>
  );
};
