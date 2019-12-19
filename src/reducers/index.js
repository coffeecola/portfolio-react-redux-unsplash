const initialState = loadFromLocalStorage();

function loadFromLocalStorage() {
  const likedState = JSON.parse(localStorage.getItem("likedImages"));
  return likedState
    ? { results: [], liked: likedState, query: "" }
    : { results: [], liked: [], query: "" };
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH_IMG":
      return { ...state, results: payload };
    case "SET_QUERY":
      return { ...state, query: payload };
    case "ADD_LIKE":
      return {
        ...state,
        liked: [...state.liked, payload]
      };
    case "REMOVE_LIKE":
      return {
        ...state,
        liked: state.liked.filter(likedImage => likedImage.id !== payload.id)
      };
    default:
      return state;
  }
};
