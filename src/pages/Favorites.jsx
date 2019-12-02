import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import * as actionTypes from "../actions/types";
import { useDispatch, useSelector } from "react-redux";

import { unsplash, toJson } from "../utils/unsplashUtils";

import styled from "styled-components";
import PhotoList from "../components/PhotoList";

const Favorites = props => {
  const [query, setQuery] = useState("");
  const { results, liked } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSearchChange = val => {
    setQuery(val);
  };

  const handleSubmit = () => {
    unsplash.search
      .photos(query, 1, 10, { orientation: "portrait" })
      .then(toJson)
      .then(({ results }) => {
        dispatch({ type: actionTypes.SEARCH_IMG, payload: results });
        props.history.push("/");
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
      ></SearchInput>
      <HomeTitle>Daily Pictures</HomeTitle>
      <PhotoList
        liked={liked}
        handleLikeClick={handleLikeClick}
        handleUnlikeClick={handleUnlikeClick}
        images={liked}
      ></PhotoList>
    </React.Fragment>
  );
};

const HomeTitle = styled.h1`
  font-family: apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 34px;
  color: #323f4b;
  margin: 36px 0 26px 0;
`;

export default Favorites;
