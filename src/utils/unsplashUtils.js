import Unsplash from "unsplash-js";
export const unsplash = new Unsplash({
  accessKey: `${process.env.REACT_APP_UNSPLASH_TOKEN}`
});

export { toJson } from "unsplash-js";
