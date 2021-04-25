import React from "react";
import ACDC from "../../static/images/acdc.jpg";
import { Linkable } from "../";

const images = {
  acdc: {
    url: ACDC,
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
