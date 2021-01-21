require("./config/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

/*Dependencies*/
const bodyParser = require("body-parser");

/*Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);
//Cors
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));
app.use(express.static(path.resolve(__dirname, "../../public")));

app.get("/viewData", (req, res) => {
  res.send(projectData);
});

//Configuracion de rutas:
app.use(require("./routes/index"));

mongoose.connect("mongodb://localhost:27017/drtaupier", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("DataBase online");
  }
});

//Sever
const port = 3000;
const server = app.listen(port, () => {
  console.log(`running on localhost ${port}`);
});
