const express = require ("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");
const { db } = require('./models');



app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
  
app.get("/", (req, res) =>{
    res.send(layout("this is confusing"));
})

app.listen(3000, () => {
    console.log("listening")
})