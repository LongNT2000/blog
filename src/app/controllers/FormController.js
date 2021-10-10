const course = require('../models/course');
class FormController {
    index(req, res) {
        res.render('form');
    }
    show(req, res) {
        course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            }
            res.status(400).json({ error: 'ERROOR' });
        });
    }
}
module.exports = new FormController();
