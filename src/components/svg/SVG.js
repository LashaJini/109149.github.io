import styled from "styled-components";
import { themes } from "../../constants";

const SVG = styled.svg`
  width: ${({ _width }) => (_width ? _width : "24px")};
  height: ${({ _height }) => (_height ? _height : "24px")};
  fill: ${({ _fill }) => (_fill ? _fill : themes.vars.textColorPrimary)};
`;

export default SVG;
