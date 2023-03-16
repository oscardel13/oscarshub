const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    techStack: {
        type: [ String ],
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const certificateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    issueDate: {
        type: Date,
        required: true
    },
    credentialId: {
        type: String,
        required: true
    },
    credentialURL:{
        type: String,
        required: true
    }
})

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        requird: true
    },
    major: {
        type: String,
        requird: true
    },
    startDate: {
        type: Date,
        requird: true
    },
    endDate: {
        type: Date,
        requird: true
    }
})

const resumeSchema = new mongoose.Schema({
    version: {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    experiences : {
        type: [ experienceSchema ],
        required: true
    },
    educations : {
        type: [educationSchema],
        required: true
    },
    certificates: {
        type: [ certificateSchema ],
        required: true
    },
    skills : {
        type: [ String ],
        required: true
    },
    projects: {
        type: [ projectSchema ],
        required: true
    }
})

module.exports = mongoose.model('Resume', resumeSchema);