import styled from "styled-components";
import Label from "./Label";
import { Hamburger1, Hamburger2, Hamburger3 } from "./Hamburger";

const Input = styled.input`
  display: none;

  &:checked ~ ${Label} {
    transition-timing-function: linear;
    transition-duration: 200ms;
    transform: scale(0.7, 0.7) translate3d(0, 0, 0);

    &:hover {
      transform: scale(0.8, 0.8) translate3d(0, 0, 0);
    }

    ${Hamburger1} {
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    ${Hamburger2} {
      transform: translate3d(0, 0, 0) scale(0.1, 1);
    }
    ${Hamburger3} {
      transform: translate3d(0, 0, 0) rotate(-45deg);
    }
  }
`;

export default Input;
