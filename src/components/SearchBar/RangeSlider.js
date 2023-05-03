import React from "react";
import ReactSlider from "react-slider";
import cn from "classnames";

const RangeSlider = (_props) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => (
        <div
          {...props}
          className={cn({
            "h-full": !isVertical,
            "w-full": isVertical,
            "aspect-square rounded-full bg-indigo-500 text-xs text-white flex items-center justify-center cursor-grab":
              true,
          })}
        >
          {state.valueNow}
        </div>
      )}
    />
  );
};

export default RangeSlider;
