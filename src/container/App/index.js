import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Header from "../../components/Header";
import actions from "../../store/actions/session";
import withStyles from '../../withStyles';
import styles from "./index.css";

let App = (props) => {
  const { route } = props;

  return (
    <Fragment>
      <Header />
      <div className="container" className={styles.app}>
        <Fragment>{renderRoutes(route.routes)}</Fragment>
      </div>
    </Fragment>
  );
};

App = withStyles(App, styles);

App.loadData = (store) => store.dispatch(actions.getUser());

export default App;
