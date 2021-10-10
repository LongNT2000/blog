const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_learn');
        console.log('connect successfully! ');
    } catch (error) {
        console.log('connect failed! ');
    }
}
module.exports = { connect };
