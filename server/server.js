const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", (req, res) => {
    res.json("Hello amazon clone");
});

app.post("/", (req, res) => {

});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});