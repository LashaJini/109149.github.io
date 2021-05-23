import React from "react";
import data from "./data.json";
import styled from "styled-components";
import { Linkable, Tech } from "../../";
import { themes, bp } from "../../../constants";

const Index = () => {
  const dataRef = React.useRef(data);

  return (
    <Wrapper>
      <Title>My Open Source Projects</Title>
      <Grid>
        {dataRef.current.map((d, i) => {
          return (
            <Card key={d.title}>
              <NumberSpan>{i + 1}.</NumberSpan>
              <div>
                <H4>
                  <H4Text>{d.title}</H4Text>
                </H4>
                <Desc>{d.description}</Desc>
                <Stack>
                  <Ul>
                    {d.stack.map((s) => (
                      <Li key={s}>
                        <Tech name={s} props={{ inset: true }} />
                      </Li>
                    ))}
                  </Ul>
                </Stack>
                <Links>
                  {d.website && (
                    <div>
                      <Linkable url={d.website}>Website</Linkable>
                    </div>
                  )}
                  {d.repo && (
                    <div>
                      <Linkable url={d.repo}>Repo</Linkable>
                    </div>
                  )}
                </Links>
              </div>
            </Card>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Grid = styled.div`
  line-height: 1.3;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  @media (max-width: ${bp.md1}) {
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: underline;
    text-decoration-color: ${themes.vars.titleColorPrimary};
    color: ${themes.vars.textColorPrimary};
  }
`;

const Links = styled.div`
  margin-top: 0.4rem;
  display: flex;
  font-size: 1.3rem;

  div {
    margin-right: 10px;
    a:hover {
      color: ${themes.vars.titleColorPrimary};
    }
  }
`;

const NumberSpan = styled.span`
  color: ${themes.vars.titleColorPrimary};
  font-size: 1.5rem;
`;

const H4Text = styled.span`
  color: ${themes.vars.textColorPrimary};
  margin-left: 0.3rem;
  font-size: 1.4rem;
`;

const Desc = styled.p`
  font-size: 1.125rem;
  letter-spacing: 0.4px;
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 4rem;
`;

const H4 = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  color: ${themes.vars.titleColorPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Stack = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  margin-bottom: 0.6rem;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
`;

const Li = styled.li`
  position: relative;
  display: inline;
  float: left;
  margin: 0.5rem 0.4rem 0.5rem 0;
`;

export default Index;
