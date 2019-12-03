import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import SearchInput from "../components/SearchInput";
import PhotoList from "../components/PhotoList";
import * as actionTypes from "../actions/types";

import { unsplash, toJson } from "../utils/unsplashUtils";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { results, liked } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSearchChange = val => {
    setQuery(val);
  };

  const handleSubmit = () => {
    fetchImages(query, 1, 20, { orientation: "portrait" });
  };

  const fetchImages = (query, page, take) => {
    unsplash.search
      .photos(query, page, take, { orientation: "portrait" })
      .then(toJson)
      .then(async res => {
        let newImages;
        if (results.length > 0) {
          newImages = [...results, ...res.results];
          console.log(newImages);
        } else {
          newImages = res.results;
        }
        dispatch({ type: actionTypes.SEARCH_IMG, payload: newImages });
      });
  };

  const handleUnlikeClick = img => {
    dispatch({ type: actionTypes.REMOVE_LIKE, payload: img });
  };

  const handleLikeClick = img => {
    dispatch({ type: actionTypes.ADD_LIKE, payload: img });
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
          fetchImages(page + 1);
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
