const express = require('express');
var bodyParser = require('body-parser');

var todoRoute = require('./routes/toDo.route');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/todo', todoRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })