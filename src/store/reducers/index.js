import { combineReducers } from "redux";
import home from "./home";
import counter from "./counter";
import session from './session'

let reducers = combineReducers({
  home,
  counter,
  session
});

export default reducers;
