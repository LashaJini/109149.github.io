import styled from "styled-components";

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "24px")};
  height: ${({ _height }) => (_height ? _height : "24px")};
  fill: ${({ _fill }) => (_fill ? _fill : "#000000")};
`;

export default SVG;
