const initialState = {
  results: [],
  liked: []
};

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
