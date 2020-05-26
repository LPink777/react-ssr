import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../components/Header";

const App = props => {
  const { route } = props;

  return (
    <Fragment>
      <Header />
      <div className="container" style={{ marginTop: 50 }}>
        <Fragment>{renderRoutes(route.routes)}</Fragment>
      </div>
    </Fragment>
  );
};

export default App;
