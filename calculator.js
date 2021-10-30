const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    console.log(num1, num2, result);
    res.send("The calculated result is " + result);
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    var wt = Number(req.body.wt);
    var ht = Number(req.body.ht);
    var result = (wt / ht ** 2).toFixed(2);
    res.send("Your BMI is " + result + "%");
});


app.listen(port, () => {
    console.log("Server started runnuing on port 5000");
});
