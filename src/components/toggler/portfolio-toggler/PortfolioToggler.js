import React from "react";
import { PortfolioContext } from "../../";

const PortfolioToggler = ({ text }) => {
  return (
    <PortfolioContext.Consumer>
      {({ togglePortfolio }) => (
        <button className="hoverable" onClick={togglePortfolio}>
          {text ?? "OI"}
        </button>
      )}
    </PortfolioContext.Consumer>
  );
};

export default PortfolioToggler;
