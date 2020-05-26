import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "../components/Header";
import routes from "../routes";
import { getClientStore } from "../store";

ReactDom.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <>
        <Header />
        <div className="container" style={{ marginTop: 50 }}>
          {renderRoutes(routes)}
        </div>
      </>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
