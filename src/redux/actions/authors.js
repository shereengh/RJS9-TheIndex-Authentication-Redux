import axios from "axios";

import { SET_AUTHORS, ADD_AUTHOR } from "./actionTypes";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/authors/");
      const authors = res.data;
      dispatch({
        type: SET_AUTHORS,
        payload: authors
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postAuthor = author => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/api/authors/",
        author
      );
      const newAuthor = res.data;
      dispatch({
        type: ADD_AUTHOR,
        payload: newAuthor
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
