import React from "react";
import styled from "styled-components";

const Paragraph = ({ children }) => {
  return <Div className="paragraph">{children}</Div>;
};

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

export default Paragraph;
