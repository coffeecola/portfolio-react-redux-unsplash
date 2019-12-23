import React from "react";
import Main from "../components/Main";

const Favorites = ({ liked, results, query, history }) => {
  return (
    <Main
      history={history}
      liked={liked}
      results={results}
      query={query}
      titlePage="Favorites"
    ></Main>
  );
};

export default Favorites;
