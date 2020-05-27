import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, matchPath } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Header from "../components/Header";
import routes from "../routes";
import { getStore } from "../store";
import App from "../container/App";

export default function (req, res) {
  let store = getStore(req);

  let matchedRoutes = matchRoutes(routes, req.path);

  const promises = matchedRoutes.map(({ route, match }) =>
    route.loadData ? route.loadData(store) : Promise.resolve(null)
  );

  Promise.all(promises).then((result) => {
    let context = { csses: [] };
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.path}>
          <Fragment>
            <Header />
            <div className="container" style={{ marginTop: 50 }}>
              {renderRoutes(routes)}
            </div>
          </Fragment>
        </StaticRouter>
      </Provider>
    );

    let cssStr = "";
    if (context.csses.length > 0) {
      cssStr = context.csses.join("\r\n");
    }

    if (context.action == "REPLACE") {
      return res.redirect(301, context.url);
    } else if (context.notFound) {
      res.status(404);
    }

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" >
              <title>React-SSR</title>
              <style>${cssStr}</style>
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
