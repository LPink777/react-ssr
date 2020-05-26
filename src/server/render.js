import React, { Component, Fragment } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Header from "../components/Header";
import routes from "../routes";
import { getStore } from "../store";
import App from '../container/App';

export default function (req, res) {
  let store = getStore();

  let matchedRoutes = matchRoutes(routes, req.path);

  let promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) promises.push(item.route.loadData(store));
  });

  Promise.all(promises).then((result) => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path}>
          <Fragment>
            <Header />
            <div className="container" style={{ marginTop: 50 }}>
              {renderRoutes(routes)}
            </div>
          </Fragment>
        </StaticRouter>
      </Provider>
    );

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" >
              <title>React-SSR</title>
          </head>
          <body>
              <div id="root">${content}</div>
              <script>
                  window.context = {
                      state:${JSON.stringify(store.getState())}
                  }
                </script>
              <script src="/index.js"></script>
          </body>
      </html>
    `);
  });
}
