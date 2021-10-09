const formRouter = require('./form');

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
}
module.exports = route;
