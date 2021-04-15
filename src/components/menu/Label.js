import styled from "styled-components";
import { themes } from "../../constants";

const Label = styled.label`
  --fg: ${themes.vars.bgColorPrimary};
  background: var(--fg);
  border-radius: 100%;
  width: 80px;
  height: 80px;

  color: white;
  text-align: center;

  z-index: 2;
  transition: all;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.05, 1.05) translate3d(0, 0, 0);
  }
`;

export default Label;
