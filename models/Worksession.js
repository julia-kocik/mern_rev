const mongoose = require('mongoose');

const Worksession = new mongoose.Schema({
    name: String,
    date: { type: String, required: true },
    counter: { type: Number, required: true }
});


module.exports = Worksession;