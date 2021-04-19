import React from "react";

// used by Typeable component
const Deleteable = ({ children, after = 1, replaceWith = ["bubu"] }) => {
  return <>{children}</>;
};

export default Deleteable;
