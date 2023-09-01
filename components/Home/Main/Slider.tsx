import React from "react";

export const Slider = ({ SliderArray }) => {
  return (
    <div className="h-7 overflow-hidden my-5">
      <div className="animate-[roll-over_25s_ease-in-out_infinite]">
        {SliderArray.map((sliderElement) => (
          <div className="text-f20 text-1 capitalize font-bold">{sliderElement}</div>
        ))}
      </div>
    </div>
  );
};
