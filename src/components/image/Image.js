import React from "react";
import { ACDC, Portfolio, ToParticles } from "../../static/images";
import { Linkable } from "../";

const images = {
  toParticles: {
    url: ToParticles,
  },
  acdc: {
    url: ACDC,
  },
  portfolio: {
    url: Portfolio,
  },
};

const Image = ({ name, alt }) => {
  let imgUrl = "";

  if (images.hasOwnProperty(name)) {
    imgUrl = images[name].url;
  }

  return (
    <>
      <React.Suspense fallback={<img alt={alt || "card"} />}>
        <Linkable url={imgUrl}>
          <img src={imgUrl} alt={alt || "card"} />
        </Linkable>
      </React.Suspense>
    </>
  );
};

export default Image;
