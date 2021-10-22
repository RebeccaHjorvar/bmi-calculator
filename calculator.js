const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(`The result of the calculation is ${result}`);
});

// bmiCalculator.html
app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', (req,res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = parseFloat(weight / (height * height))

    res.send(`Your BMI is ${bmi}`)
})

// route
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
