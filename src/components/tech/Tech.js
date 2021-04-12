import React from "react";
import { AnimTechButton } from "../";

const techs = {
  github: {
    component: React.lazy(() => import("../svg/Github")),
    url: "https://github.com",
    args: {
      fill: "black",
    },
  },
  typescript: {
    component: React.lazy(() => import("../svg/Typescript")),
    url: "https://www.typescriptlang.org/",
    args: {
      fill: "#007acc",
    },
  },
  javascript: {
    component: React.lazy(() => import("../svg/Javascript")),
    url:
      "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    args: {
      fill: "#f7df1e",
    },
  },
  react: {
    component: React.lazy(() => import("../svg/React")),
    url: "https://reactjs.org",
    args: {
      fill: "#61DAFB",
      width: "40px",
      height: "40px",
    },
  },
  node: {
    component: React.lazy(() => import("../svg/Node")),
    url: "https://nodejs.org",
    args: {
      fill: "#3c873a",
    },
  },
};

const Tech = ({ name }) => {
  let TechLogo = <></>;

  if (techs.hasOwnProperty(name)) {
    TechLogo = techs[name].component;
  }

  return (
    <React.Suspense fallback={<div>OI</div>}>
      <AnimTechButton url={techs[name].url}>
        <TechLogo {...techs[name].args} />
      </AnimTechButton>
    </React.Suspense>
  );
};

export default Tech;
