const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highscore = new Schema ({
    name: String,
    value: Number
});

module.exports = mongoose.model('Highscore', highscore);
