import * as types from "../action-types";

const initState = {
  user: null,
  success: null,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.SET_SESSION:
      return { ...action.payload };
    default:
      return state;
  }
}
