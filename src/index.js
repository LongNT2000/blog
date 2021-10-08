const path= require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'resources/views'))

app.use(express.static(path.join(__dirname,"public")))

app.use(morgan('combined'))

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('home');
})
 
app.listen(3000)