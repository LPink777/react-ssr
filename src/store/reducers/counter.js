import * as types from "../action-types";

let initState = {
  num: 0,
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        num: state.num + 1,
      };
    default:
      return state;
  }
}
