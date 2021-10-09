const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

// app.use(morgan('combined'))

app.set('view engine', 'hbs');

route(app);

app.listen(port);
