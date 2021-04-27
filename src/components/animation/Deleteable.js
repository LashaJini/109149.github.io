import React from "react";

// used by Typeable component
const Deleteable = ({ children, after = 1, replaceWith = ["bubu"] }) => {
  return <span className="deleteable">{children}</span>;
};

export default Deleteable;
