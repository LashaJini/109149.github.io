import React from "react";
import { Typeable, Linkable } from "../../";
import styled, { css } from "styled-components";
import { themes, bp } from "../../../constants";
import axios from "axios";

let last4Weeks = 4 * 7 * 24 * 60 * 60 * 1000;
const Content = () => {
  const [typeableProps, setTypeableProps] = React.useState({
    fontSize: "1.5rem",
    cursorHeight: "1.5rem",
    cursorBottom: ".6rem",
  });
  const [commits, setCommits] = React.useState([]);
  const [needsUpdate, setNeedsUpdate] = React.useState(false);
  const [totalCommits, setTotalCommits] = React.useState(0);

  React.useEffect(() => {
    if (needsUpdate) {
      let newData = [];

      // remove old ones
      commits.forEach((d) => {
        if (Date.now() - d.updated_at < last4Weeks) {
          newData.push(d);
        }
      });

      async function tmp() {
        // O(n^2)
        const data = await axios(
          "https://api.github.com/users/109149/repos"
        ).then((response) => response.data);

        for (const d of data) {
          let updated_at = new Date(d.updated_at).getTime();

          if (Date.now() - updated_at < last4Weeks) {
            let i = newData.findIndex((_) => _.name === d.full_name);

            if (i === -1) {
              const number_of_commits = await axios
                .get(
                  `https://api.github.com/repos/${d.full_name}/stats/participation`
                )
                .then((response) => response.data)
                .then((response) => response.owner)
                .then((response) =>
                  response.slice(-4).reduce((acc, curr) => acc + curr, 0)
                );

              let newD = {
                name: d.full_name,
                number_of_commits,
                updated_at,
              };

              newData.push(newD);
            }
            // no else, cuz we are ok if commits of our repo changes.
          }
        }
        return newData;
      }
      tmp().then((response) => setCommits(response));
    }
  }, [needsUpdate, commits]);

  React.useEffect(() => {
    let iw = window.innerWidth;
    if (iw < bp.sm1.slice(0, -2)) {
      setTypeableProps({
        fontSize: "1.3rem",
        cursorHeight: "1.3rem",
        cursorBottom: "0.6rem",
      });
    }
  }, []);

  React.useEffect(() => {
    if (needsUpdate) {
      let sum = 0;
      commits.forEach((c) => (sum += c.number_of_commits));
      localStorage.setItem("109149-date", Date.now());
      localStorage.setItem("109149-commits", sum);
      setTotalCommits(sum);
    }
  }, [needsUpdate, commits]);

  React.useEffect(() => {
    let date = localStorage.getItem("109149-date");
    let numberOfCommits = localStorage.getItem("109149-commits");
    // update once in a week
    if (numberOfCommits === null || Date.now() - date > last4Weeks / 4) {
      setNeedsUpdate(true);
    } else {
      setTotalCommits(Number(numberOfCommits) || 0);
      setNeedsUpdate(false);
    }
  }, [commits]);

  return (
    <Wrapper>
      <Typeable
        writeDelay={300}
        writeSpeed={70}
        style={{
          fontSize: typeableProps.fontSize,
          fontWeight: "normal",
          lineHeight: "1.6",
          margin: "0",
        }}
        {...typeableProps}
      >
        <Bold>Hi, I'm 109149</Bold>, and I'm a CE student. Currently, focusing
        on "CS" side of CE. In the past 4 weeks, I've pushed{" "}
        <Linkable url="https://github.com/109149">
          {totalCommits} public commits
        </Linkable>{" "}
        to Github. I like <Bold>Linux</Bold> and <Bold>(Neo)Vim</Bold>, I'm
        reading{" "}
        <Linkable url="https://www.goodreads.com/user/show/125838240-109149">
          1 book
        </Linkable>{" "}
        at the moment: "Principles of Computer System Design" by Jerome H.
        Saltzer. And also, I prefer <BoldItalic>Marvel</BoldItalic> over{" "}
        <BoldItalic>DC</BoldItalic>.
      </Typeable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh; // for CLS
  a {
    color: ${themes.vars.textColorPrimary};
    text-decoration: underline;
    text-decoration-color: ${themes.vars.titleColorPrimary};
    &:hover {
      color: ${themes.vars.titleColorPrimary};
    }
  }
`;

const bold = css`
  font-weight: bold;
`;
const italic = css`
  font-style: italic;
`;

const Bold = styled.span`
  ${bold}
`;

const BoldItalic = styled.span`
  ${bold}
  ${italic}
`;

export default Content;
