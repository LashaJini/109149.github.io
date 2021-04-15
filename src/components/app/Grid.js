import styled from "styled-components";

export const numberOfColumns = 12;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, 1fr);
  grid-gap: 15px;

  position: absolute;
  width: 100%;
`;

export default Grid;
