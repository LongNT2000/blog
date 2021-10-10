const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    image: { type: String },
});
module.exports = mongoose.model('course', course);
