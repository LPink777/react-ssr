import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import withStyles from '../../withStyles';
import styles from "./index.css";

const Header = props => {
  const { user } = useSelector((state) => state.session);

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            React-SSR
          </a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/list">User List</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <Fragment>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </Fragment>
            )}
            {user && (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    welcome <span className={styles.user}>{user.username}</span>
                  </a>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withStyles(Header, styles);
