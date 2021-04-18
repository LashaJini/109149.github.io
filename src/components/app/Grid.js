import styled, { css } from "styled-components";
import GridItem from "./GridItem";

export const numberOfColumns = 12;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-gap: 2rem;

  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y proximity;
  // scroll-padding: 5rem;

  position: absolute;
  width: 100%;

  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      ${GridItem} {
        transition: background 1.2s ease-out;
      }
    `}
`;

export default Grid;
