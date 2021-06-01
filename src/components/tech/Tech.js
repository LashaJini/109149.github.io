import React from "react";
import { AnimTechButton } from "../";

const techs = {
  next: {
    component: React.lazy(() => import("../svg/Next")),
    url: "https://nextjs.org/",
    args: {
      fill: "#000",
    },
  },
  wasm: {
    component: React.lazy(() => import("../svg/Wasm")),
    url: "https://webassembly.org/",
    args: {
      fill: "#654ff0",
    },
  },
  rust: {
    component: React.lazy(() => import("../svg/Rust")),
    url: "https://www.rust-lang.org/",
    args: {
      fill: "#000",
    },
  },
  scss: {
    component: React.lazy(() => import("../svg/Sass")),
    url: "https://sass-lang.com/",
    args: {
      fill: "hsl(330,52%,81%)",
    },
  },
  sass: {
    component: React.lazy(() => import("../svg/Sass")),
    url: "https://sass-lang.com/",
    args: {
      fill: "hsl(330,52%,81%)",
    },
  },
  css: {
    component: React.lazy(() => import("../svg/CSS")),
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
    args: {
      fill: "hsl(207,71%,42%)",
    },
  },
  pug: {
    component: React.lazy(() => import("../svg/Pug2")),
    url: "https://pugjs.org/",
    args: {},
  },
  html: {
    component: React.lazy(() => import("../svg/HTML")),
    url: "https://html.spec.whatwg.org/",
    args: {
      fill: "hsl(11,77%,54%)",
    },
  },
  deno: {
    component: React.lazy(() => import("../svg/Deno")),
    url: "https://deno.land/",
    args: {
      fill: "#000",
    },
  },
  git: {
    component: React.lazy(() => import("../svg/Git")),
    url: "https://git-scm.com/",
    args: {
      fill: "hsl(9,86%,56%)",
    },
  },
  threejs: {
    component: React.lazy(() => import("../svg/Three")),
    url: "https://threejs.org/",
    args: {
      fill: "#000",
    },
  },
  github: {
    component: React.lazy(() => import("../svg/Github")),
    url: "https://github.com",
    args: {
      fill: "#000",
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

const Tech = ({ name, props, args = {}, onlyLogo = false }) => {
  let TechLogo = <>{name}</>;

  if (techs.hasOwnProperty(name)) {
    TechLogo = techs[name].component;
  }

  return (
    <React.Suspense fallback={<div>OI</div>}>
      {onlyLogo ? (
        <TechLogo {...(techs[name] ?? {}).args} {...args} />
      ) : (
        <AnimTechButton url={techs[name].url} props={props}>
          <TechLogo {...(techs[name] ?? {}).args} />
        </AnimTechButton>
      )}
    </React.Suspense>
  );
};

export default Tech;
