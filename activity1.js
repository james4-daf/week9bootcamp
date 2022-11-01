const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.get("/speak/:animal", (req, res) => {
  const { animal } = req.params;
  if (animal == "pig") {
    res.send(`The ${animal} says 'Oink!'`);
  }
  if (animal == "cow") {
    res.send(`The ${animal} says 'Moo!'`);
  }
  if (animal == "dog") {
    res.send(`The ${animal} says 'Woof Woof!'`);
  }
});

app.get("/greet/:word/:number", (req, res) => {
  const { word, number } = req.params;
  let count = "";
  for (let i = 0; i < number; i++) {
    count = count + " " + word;
  }
  res.send(`${count}`);
});

app.get("*", (req, res) => {
  res.send("Sorry, page not found...Blame our developer");
});

app.use(express.static(__dirname + "/styles"));

app.listen(3000);
