import React from "react";
import styled from "styled-components";
import { Tech, ProgressBar } from "../";
import { bp, themes } from "../../constants";

const _data = [
  {
    name: "javascript",
    p: 0.9,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "typescript",
      p: 0.6,
      args: {
        width: "30px",
        height: "30px",
      },
    },
  },
  {
    name: "git",
    p: 0.6,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "",
      p: 0,
    },
  },
  {
    name: "react",
    p: 0.7,
    args: {},
    replaceWith: {
      name: "",
      p: 0,
    },
  },
  {
    name: "node",
    p: 0.55,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "deno",
      p: 0.4,
      args: {
        width: "30px",
        height: "30px",
      },
    },
  },
  {
    name: "html",
    p: 0.9,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "pug",
      p: 0.5,
      args: {
        width: "30px",
        height: "30px",
      },
    },
  },
  {
    name: "css",
    p: 0.7,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "scss",
      p: 0.65,
      args: {
        width: "30px",
        height: "30px",
      },
    },
  },
  {
    name: "threejs",
    p: 0.2,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "",
      p: 0,
    },
  },
  {
    name: "rust",
    p: 0.35,
    args: {
      width: "30px",
      height: "30px",
    },
    replaceWith: {
      name: "",
      p: 0,
    },
  },
];

// svg of tech, confidence bar + %.
const TechCard = () => {
  const [data, setData] = React.useState(_data);

  const handleHover = (d, i) => {
    setData((prev) => {
      let current = data[i];
      let newData = [...prev];

      if (!current.replaceWith.name) return prev;

      [current.name, current.replaceWith.name] = [
        current.replaceWith.name,
        current.name,
      ];
      [current.p, current.replaceWith.p] = [current.replaceWith.p, current.p];
      newData[i] = current;

      return newData;
    });
  };

  // console.log("render");
  return (
    <>
      <Container>
        <Ul>
          {data.map((d, i) => {
            return (
              <Li key={i}>
                <Div
                  onMouseEnter={() => handleHover(d, i)}
                  onMouseLeave={() => handleHover(d, i)}
                >
                  <Tech name={d.name} onlyLogo={true} args={d.args} />
                </Div>
                <ProgressBarWrapper>
                  <ProgressBar
                    width="100%"
                    height="50%"
                    barWidth={`${220 * d.p}px`}
                    barColor={`hsl(${Math.floor(120 * d.p)},82%,46%)`}
                  />
                </ProgressBarWrapper>
                <Div>{Math.floor(d.p * 100)}%</Div>
              </Li>
            );
          })}
        </Ul>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  // padding: 5px;
  // border: 1px solid black;
  // background: ${themes.vars.bgColorPrimary};

  // @media (min-width: ${bp.lg}) {
  //   background: none;
  // }
`;

const ProgressBarWrapper = styled.div`
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 1.1rem;
`;

export default TechCard;
