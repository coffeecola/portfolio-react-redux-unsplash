import React from "react";

import styled from "styled-components";

const SearchInput = ({ handleSearchChange, handleSubmit, query }) => {
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        className="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search Pictures"
        aria-label="Search Pictures"
        value={query}
        name="search"
        onChange={e => {
          handleSearchChange(e.currentTarget.value);
          e.preventDefault();
        }}
      />

      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  max-width: 768px;
  position: relative;
  input {
    background-color: #dbe0e6;
    border: 0;
    border-radius: 40px;
    font-size: 14px;
    font-family: apple-system, BlinkMacSystemFont, sans-serif;
    color: #323f4b;
  }

  button {
    position: absolute;
    right: 10px;
    top: 4px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;

export default SearchInput;
