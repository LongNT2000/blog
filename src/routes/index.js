const formRouter = require('./form');
const course = require('./course');

function route(app) {
    app.use('/fu', formRouter);
    app.get('/', function (req, res) {
        res.render('home');
    });
    app.get('/form', function (req, res) {
        res.render('form');
    });
    app.post('/form', function (req, res) {
        console.log(req.body);
        res.render('form');
    });

    app.use('/course', course);
}
module.exports = route;
