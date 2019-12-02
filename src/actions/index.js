import * as actionTypes from "./types";

export const onSearchSubmit = searchResults => ({
  type: actionTypes.SEARCH_IMG,
  searchResults
});
