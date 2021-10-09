class FormController {
    index(req, res) {
        res.render('form');
    }
    show(req, res) {
        res.send('ok');
    }
}
module.exports = new FormController();
