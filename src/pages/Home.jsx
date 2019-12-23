import React from "react";
import Main from "../components/Main";

const Home = ({ liked, results, query }) => {
  return (
    <Main
      liked={liked}
      results={results}
      query={query}
      titlePage="Daily Pictures"
    ></Main>
  );
};

export default Home;
