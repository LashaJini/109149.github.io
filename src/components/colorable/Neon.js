import React from "react";

const Neon = () => {
  return (
    <>
      <svg width="0" height="0">
        <filter id="neon-filter-red">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="BLUR" />
          <feColorMatrix
            in="BLUR"
            mode="matrix"
            values="0 0 0 0 1
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 2 0"
            result="BG2"
          />

          <feBlend in="SourceGraphic" in2="BG2" result="MIX" />
        </filter>
      </svg>
    </>
  );
};

export default Neon;
