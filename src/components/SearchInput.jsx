import React from "react";

import styled from "styled-components";

const SearchInput = ({ handleSearchChange, handleSubmit }) => {
  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{ maxWidth: 768 }}
    >
      <input
        className="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search Pictures"
        aria-label="Search Pictures"
        onChange={e => {
          handleSearchChange(e.currentTarget.value);
          // this.searchQuery = e.currentTarget.value;
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
