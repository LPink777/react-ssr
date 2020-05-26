import express from "express";
import proxy from 'express-http-proxy';
import render from "./render";

let app = express();

app.use(express.static("public"));

app.use(
  "/api",
  proxy("http://localhost:4000", {
    //修改请求路径
    proxyReqPathResolver: function (req) {
      return `/api${req.url}`;
    },
  })
);

//context数据的传递 StaticRouter需要知道当前路径
app.get("*", (req, res) => {
  render(req, res);
});

app.listen(9090);
