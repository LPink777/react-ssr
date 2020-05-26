import express from "express";
import render from "./render";

let app = express();

app.use(express.static("public"));

//context数据的传递 StaticRouter需要知道当前路径
app.get("*", (req, res) => {
  render(req, res);
});

app.listen(9090);
