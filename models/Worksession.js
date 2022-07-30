const mongoose = require('mongoose');

const Worksession = new mongoose.Schema({
    name: String,
    startDate: { type: Number, required: true },
    endDate: { type: Number, required: true },
    duration: { type: Number, required: true },
});


module.exports = Worksession;