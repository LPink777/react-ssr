import React from "react";
import Home from "./container/Home";
import Counter from "./container/Counter";
import User from "./container/User";
import UserList from "./container/User/components/UserList";
import App from "./container/App";
import Login from "./container/Login";
import Logout from "./container/Logout";
import Profile from "./container/Profile";
import NotFound from './container/NotFound';

export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        key: "/home",
        loadData: Home.loadData,
      },
      {
        path: "/user",
        component: User,
        key: "/user",
        routes: [
          {
            path: "/user/list",
            component: UserList,
            key: "/user/list",
          },
        ],
      },
      {
        path: "/counter",
        component: Counter,
        key: "counter",
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        key: "/login",
        exact: true,
      },
      {
        path: "/logout",
        component: Logout,
        key: "/logout",
        exact: true,
      },
      {
        path: "/profile",
        component: Profile,
        key: "/profile",
        exact: true,
      },
      {
        component: NotFound,
      },
    ],
  },
];
