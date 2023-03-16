const {
    getAllResumes,
    getResumeById
} = require('../../models/resume.models');

module.exports = {
    Query: {
        resumes: (parent, args, context, info) => {
            return getAllResumes()
        },
        resumeByVersion: async (parent, args, context, info) => {
            return await getResumeById(args.version)
        }
    }
}