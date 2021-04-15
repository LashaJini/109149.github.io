import React from "react";
import styled from "styled-components";
import { useFullyVisible } from "../../hooks";

const Paragraph = ({ children }) => {
  const spanRef = React.useRef();
  const fullyVisible = useFullyVisible(spanRef.current);

  return (
    <Div ref={spanRef} className="paragraph">
      {fullyVisible && children}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

export default Paragraph;
