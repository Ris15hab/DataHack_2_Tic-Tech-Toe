const mongoose = require('mongoose')

const lawyerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    charges: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    feedback: {
        type: Number,
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    domain: {
        type: [String],
        required: true
    },
    jurisdiction: {
        type: String,
        // required: true
    },
    daysOfDisposal: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    demographics: {
        type: String,
        required: true
    },
    flag: {
        type: Boolean,
        required: true
    },
    proBono: {
        type: Boolean,
        required: true
    }
})

const Lawyer = new mongoose.model('lawyer',lawyerSchema)

module.exports = Lawyer