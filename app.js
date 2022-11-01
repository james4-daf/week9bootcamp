const express = require("express");
const app = express();

//changing variables in express
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.send("Hello Worldq");
});

//for middlewars
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use(express.static(__dirname + "/styles"));

//only use res.render when using __dirname
app.get("/home", function (req, res) {
  res.render(__dirname + "/views/home.hbs");
});

app.get("/about", function (req, res) {
  let users = [
    { name: "Dafydd", age: 20 },
    { name: "Sujith", age: 21 },
    { name: "TJ", age: 22 },
    { name: "Manish", age: 23 },
  ];
  res.render(__dirname + "/views/about.hbs", { users });
});

app.get("/landing", function (req, res) {
  res.render(__dirname + "/views/landing.hbs");
});

//handles all requests that do not match the above
app.get("*", (req, res) => {
  res.render(__dirname + "/views/notFound.hbs");
});
app.listen(3000);
