const initialState = loadFromLocalStorage();

function loadFromLocalStorage() {
  const likedState = JSON.parse(localStorage.getItem("likedImages"));
  return likedState
    ? { results: [], liked: likedState }
    : { results: [], liked: [] };
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH_IMG":
      console.log("test");
      return { ...state, results: payload };

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
