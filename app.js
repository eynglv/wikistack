const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wiki = require('./routes/wiki');
const users = require('./routes/users');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wiki);
app.use('/users', users);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async () => {
  await Page.sync();
  await User.sync();
};

app.listen(3000, () => {
  console.log("listening");
});

init();
