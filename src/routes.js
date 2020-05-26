import React from "react";
import Home from "./container/Home";
import Counter from "./container/Counter";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    key: "home",
    loadData: Home.loadData,
  },
  {
    path: "/counter",
    component: Counter,
    key: "login",
    exact: true,
  },
];
