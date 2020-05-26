import React from "react";
import Home from "./container/Home";
import Counter from "./container/Counter";
import User from "./container/User";
import UserList from "./container/User/components/UserList";
import App from "./container/App";

export default [
  {
    path: "/",
    component: App,
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
        key: "login",
        exact: true,
      },
    ],
  },
];
