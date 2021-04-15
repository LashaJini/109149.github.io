import styled from "styled-components";

const Nav = styled.nav`
  filter: url("#cta-filter");

  height: 100px;
  font-size: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 1rem;

  position: relative;

  transition: all 1200ms ease-out;
`;

export default Nav;
