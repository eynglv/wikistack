const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require("./models");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(layout("this is confusing"));
});

const init = async () => {
  await Page.sync();
  await User.sync();
};

app.listen(3000, () => {
  console.log("listening");
});

init();
