let express = require("express");
let cors = require("cors");
let app = express();

var corsOptions = {
  origin: "http://localhost:9090",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let users = [
  { id: 1, name: "ff" },
  { id: 2, name: "ll" },
];

app.get("/api/users", function (req, res) {
  res.json(users);
});

app.listen(4000);
