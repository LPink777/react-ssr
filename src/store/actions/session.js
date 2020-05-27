import * as types from "../action-types";

export default {
  login(user) {
    return function (dispatch, getState, request) {
      //http://localhost:4000/api/users
      return request.post("/api/login", user).then((result) => {
        dispatch({
          type: types.SET_SESSION,
          payload: result.data.data,
        });
      });
    };
  },

  logout() {
    return function (dispatch, getState, request) {
      //http://localhost:4000/api/users
      return request.get("/api/logout").then((result) => {
        dispatch({
          type: types.SET_SESSION,
          payload: result.data.data,
        });
      });
    };
  },

  getUser() {
    return function (dispatch, getState, request) {
      //http://localhost:4000/api/users
      return request.get("/api/user").then((result) => {
        dispatch({
          type: types.SET_SESSION,
          payload: result.data.data,
        });
      });
    };
  },
};
