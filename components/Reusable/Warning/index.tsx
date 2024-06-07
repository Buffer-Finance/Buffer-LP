import { CloseOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { atom } from "jotai";
import { ReactElement } from "react";

export const warningAtom = atom({ warningState: true });

export const Warning: React.FC<{
  text: ReactElement;
  shouldRender?: boolean;
  closeWarning: () => void;
  shouldAllowClose?: boolean;
  className?: string;
}> = ({ text, shouldRender = true, closeWarning, shouldAllowClose = true, className = "" }) => {
  // if (shouldRender)
  return (
    <div
      className={`text-f16 sm:!text-f10 text-1 font-normal background-bar-gradient rounded-[8px] mt-4 pl-7 pr-6 sm:px-5 py-4 tab:mb-1 hover:brightness-125 w-fit mx-auto transition-all duration-500 ${className} ${
        shouldRender ? "translate-x-1" : "-translate-y-[100px]"
      }`}
    >
      <div className="inline">{text}</div>
      {shouldAllowClose && (
        <IconButton className="text-1 ml-4 sm:ml-[0px] sm:hidden inline" onClick={closeWarning}>
          <CloseOutlined />
        </IconButton>
      )}
    </div>
  );
  // else return <></>;
};
