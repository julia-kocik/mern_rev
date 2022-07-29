const Worksession = {
    name: String,
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true },
};


module.exports = Worksession;