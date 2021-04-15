import styled from "styled-components";

const Hamburger = styled.span`
  --width: 25px;
  --height: 3px;
  width: var(--width);
  height: var(--height);
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  margin-top: calc(var(--height) / -2);
  transition: transform 200ms;
`;
export const Hamburger1 = styled(Hamburger)`
  transform: translate3d(0, -8px, 0);
`;
export const Hamburger2 = styled(Hamburger)`
  transform: translate3d(0, 0, 0);
`;
export const Hamburger3 = styled(Hamburger)`
  transform: translate3d(0, 8px, 0);
`;

export default Hamburger;
