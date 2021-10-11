const course = require('../models/course');
const { multipleMongooseToObject } = require('../../ultils/mongoose');
class CourseController {
    index(req, res, next) {
        course
            .find({})
            .then((courses) => {
                res.render('course', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // show(req, res) {
    //     course.find({}, function (err, courses) {
    //         if (!err) {
    //             res.json(courses);
    //             return;
    //         }
    //         res.status(400).json({ error: 'ERROOR' });
    //     });
    // }
}
module.exports = new CourseController();
