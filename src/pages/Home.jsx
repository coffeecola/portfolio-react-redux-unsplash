import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import SearchInput from "../components/SearchInput";
import PhotoList from "../components/PhotoList";
import * as actionTypes from "../actions/types";

import { unsplash, toJson } from "../utils/unsplashUtils";

const Home = ({ liked, results, query }) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleSearchChange = val => {
    dispatch({ type: actionTypes.SET_QUERY, payload: val });
  };

  const handleUnlikeClick = img => {
    dispatch({ type: actionTypes.REMOVE_LIKE, payload: img });
  };

  const handleLikeClick = img => {
    dispatch({ type: actionTypes.ADD_LIKE, payload: img });
  };

  const handleSubmit = () => {
    unsplash.search
      .photos(query, 1, 10, { orientation: "portrait" })
      .then(toJson)
      .then(({ results }) => {
        dispatch({ type: actionTypes.SEARCH_IMG, payload: results });
      });
  };

  const fetchImages = (query, page, take) => {
    unsplash.search
      .photos(query, page, take, { orientation: "portrait" })
      .then(toJson)
      .then(async res => {
        let newImages;
        if (results.length > 0) {
          newImages = [...results, ...res.results];
        } else {
          newImages = res.results;
        }
        dispatch({ type: actionTypes.SEARCH_IMG, payload: newImages });
      });
  };

  return (
    <React.Fragment>
      <SearchInput
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
        query={query}
      ></SearchInput>
      <HomeTitle>Daily Pictures</HomeTitle>
      <InfiniteScroll
        dataLength={results ? results.length : 20}
        next={() => {
          fetchImages(query, page + 1);
          setPage(page + 1);
        }}
        hasMore={true}
      >
        <PhotoList
          liked={liked}
          handleLikeClick={handleLikeClick}
          handleUnlikeClick={handleUnlikeClick}
          images={results}
        ></PhotoList>
      </InfiniteScroll>
    </React.Fragment>
  );
};

const HomeTitle = styled.h1`
  font-family: apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 34px;
  color: #323f4b;
  margin: 36px 0 26px 0;
`;

export default Home;
