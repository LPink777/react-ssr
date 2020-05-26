import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import clientRequest from '../client/request';
import serverRequest from '../server/request';

export function getStore() {
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument(serverRequest), logger)
  );
}

export function getClientStore() {
  let initState = window.context.state;
  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk.withExtraArgument(clientRequest), logger)
  );
}
