const course = require('../models/course');
const { multipleMongooseToObject } = require('../../ultils/mongoose');
const { mongooseToObject } = require('../../ultils/mongoose');
class CourseController {
    //[GET] course/
    index(req, res, next) {
        course
            .find({})
            .then((courses) => {
                res.render('courses/course', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] course/:slug
    detail(req, res, next) {
        course
            .findOne({ slug: req.params.slug.toString().trim() })
            .then((course) => {
                res.render('courses/courseDetail', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET] course/create
    create(req, res, next) {
        res.render('courses/createCourse');
    }
    //[POST] course/store
    store(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/sddefault.jpg`;
        const courses = new course(req.body);
        courses
            .save()
            .then(() => res.redirect('/course'))
            .catch((error) => {});
    }
    //[GET] /course/list
    list(req, res, next) {
        Promise.all([course.find({}), course.countDocumentsDeleted()])
            .then(([courses, countDelete]) => {
                res.render('courses/list', {
                    countDelete,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /course/:id/edit
    edit(req, res, next) {
        course
            .findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[PUT] /course/update/:id
    update(req, res, next) {
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/sddefault.jpg`;
        course
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/course/list'))
            .catch(next);
    }
    //[PATCH] /course/delete/:id
    destroy(req, res, next) {
        course
            .delete({ _id: req.params.id })
            .then(() => res.redirect('/course/list'))
            .catch(next);
    }
    //[GET] /course/trash
    trash(req, res, next) {
        course
            .findDeleted({})
            .then((courses) => {
                res.render('courses/trash', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[PATCH] /:id/restore
    restore(req, res, next) {
        course
            .restore({ _id: req.params.id })
            .then(() => res.redirect('/course/trash'))
            .catch(next);
    }
    //[DELETE] /:id/force
    force(req, res, next) {
        course
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/course/trash'))
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
