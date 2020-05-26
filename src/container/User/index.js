import React, { Component } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const User = props => {
  const { route, children } = props;

  return (
    <div className="row">
      <div className="col-md-3">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/list">用户列表</Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/add">添加用户</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-9">{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default User;