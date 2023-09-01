import React, { ReactNode } from "react";
import Big from "big.js";
import NumberTooltip from "./NumberToolTip";
import toFixed from "../Utils/toFixed";
import { numberWithCommas } from "../Utils/numberWithCommas";

interface IDisplayProp {
  data: string | number;
  unit?: string;
  className?: string;
  precision?: number;
  disable?: boolean;
  label?: React.ReactChild;
  content?: ReactNode;
  placement?: "top" | "bottom";
  keepBiggerPrecision?: boolean;
}
const underLineClass = "underline underline-offset-4 decoration decoration-[#ffffff30]  w-fit ml-auto";
export const Display: React.FC<IDisplayProp> = ({
  data,
  unit,
  label,
  disable,
  placement,
  className,
  content,
  keepBiggerPrecision,
  precision = 2,
}) => {
  if (!data || data == "") {
    data = "0";
    return (
      <span>
        {label}0{unit ? " " + unit : ""}
      </span>
    );
  }
  if (typeof data === "number") data = data.toString();

  const oneBN = new Big("1.0");
  const zeroBN = new Big("0.0");
  const tenThousandBN = new Big("1000");
  const dataBN = new Big("" + data);
  const isDataSmallerThan1 = dataBN.lt(oneBN);
  const isDataSmallerThan0 = dataBN.lt(zeroBN);
  const isDataNegative = data[0] === "-";
  const isDataGreaterThan10000 = dataBN.gt(tenThousandBN);
  let displayData = "";
  if (isDataGreaterThan10000) {
    displayData = numberWithCommas(toFixed(data, precision));
  }
  let isDecimal = false;
  const arr = data.split(".");
  if (arr.length > 1 && arr[1].length > precision) {
    isDecimal = true;
  }
  // if(!data || data === '') ret

  const Content = `${label ? label : ""} ${data} ${unit || ""}`;

  // if (!isDecimal) {
  //   return (
  //     <div className={["flex mono content-center", className].join(" ")}>
  //       {label}
  //       {data && numberWithCommas(data)}
  //       {unit ? <>{" " + unit}</> : ""}
  //     </div>
  //   );
  // }
  className = content ? className + " " + underLineClass : className;
  let tooltipContent: ReactNode | string = data + (unit ? "" + unit : "");
  if (content) {
    tooltipContent = <div className="px-4 py-2">{content}</div>;
  }
  if (disable) {
    tooltipContent = "";
  }

  const DefaultExport = (
    <NumberTooltip content={tooltipContent} placement={placement}>
      <div className={["flex mono content-center", className].join(" ")}>
        {label}
        {data && numberWithCommas(toFixed(data, precision))}
        {unit ? <>{"" + unit}</> : ""}
      </div>
    </NumberTooltip>
  );
  if (content) {
    return DefaultExport;
  }

  if (isDataSmallerThan1) {
    // data is in 0.000something but positive
    if (isDataSmallerThan0) {
      // if data is negative
      // if (data.length > 5) {
      // -0.0001 + more digits
      return (
        <NumberTooltip content={tooltipContent} placement={placement}>
          <div className={["flex mono content-center", className].join(" ")}>
            {label}
            {data && numberWithCommas(toFixed(data, precision))}
            {unit ? <>{"" + unit}</> : ""}
          </div>
        </NumberTooltip>
      );
      // } else {
      //   // -0.0001 |
      //   return (
      //     <div className={["flex mono content-center", className].join(" ")}>
      //       {label}
      //       {data}
      //       &nbsp;
      //       {unit}
      //     </div>
      //   );
      // }
    }
    // 0.00precision11 has length more than 6.
    if (data.length > 4) {
      return (
        <NumberTooltip content={tooltipContent} placement={placement}>
          <div className={["flex mono content-center ", className].join(" ")}>
            {label}
            {data && toFixed(data, precision)}
            {/* &nbsp; */}
            {unit ? <>{"" + unit}</> : ""}
          </div>
        </NumberTooltip>
      );
    } else {
      return (
        <div className={["flex mono content-center", className].join(" ")}>
          {label}
          {data}

          {unit ? <>{"" + unit}</> : ""}
        </div>
      );
    }
  }
  // if (isDecimal) {
  return DefaultExport;
};
