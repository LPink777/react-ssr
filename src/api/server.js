let express = require("express");
let morgan = require("morgan");
let session = require("express-session");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "rssr",
  })
);

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let users = [
  { id: 1, name: "eddie" },
  { id: 2, name: "crystal" },
  { id: 3, name: "alec" },
  { id: 4, name: "viki" },
];

app.get("/api/users", function (req, res) {
  res.json(users);
});

app.post("/api/login", function (req, res) {
  let user = req.body;
  req.session.user = user;
  res.json({
    code: 0,
    data: {
      user,
      success: "登录成功",
    },
  });
});

app.get("/api/logout", function (req, res) {
  req.session.user = null;
  res.json({
    code: 0,
    data: {
      success: "退出成功",
    },
  });
});

app.get("/api/user", function (req, res) {
  if (req.session.user) {
    res.json({
      code: 0,
      data: {
        user: req.session.user,
        success: "获取用户信息成功",
      },
    });
  } else {
    res.json({
      code: 1,
      data: {
        error: "此用户未登录",
      },
    });
  }
});

app.listen(4000);
