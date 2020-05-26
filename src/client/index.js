import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "../routes";
import getStore from "../store";

ReactDom.hydrate(
  <Provider store={getStore()}>
    <BrowserRouter>
      <>
        <Header />
        <div className="container" style={{ marginTop: 50 }}>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </div>
      </>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
