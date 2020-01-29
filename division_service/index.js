'use strict'
const express = require('express')

// Create the express app
const app = express()

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  var num1 = parseInt(req.query.num1);
  var num2 = parseInt(req.query.num2);
  if (num2 == 0) {
    setTimeout(function () {
      throw new Error('We crashed!!!!!');
    }, 10);
    res.status(500).send()
  }
  var result = {
    'result': num1 / num2
  };
  res.status(200).send(result);
});

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err)
  res.status(500).send()
})



// Start server
app.listen(3002, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:3002')
})
