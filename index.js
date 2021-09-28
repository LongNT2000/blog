const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    var a=5;
    var b=6;
    var s=a+b;
  res.send('Hello World')
})
 
app.listen(3000)