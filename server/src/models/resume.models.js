const resumeCollection = require("./resume.mongo")

async function loadResume(){
    await saveResume(resumeV1)
    console.log("ADDED")
}

async function saveResume(resume){
    await resumeCollection.findOneAndUpdate(
        {version: resume.version},
        resume,
        {upsert:true}
    )
}

async function getAllResumes(){
    resumeList = await resumeCollection.find({},"-_id -__v")
    console.log(resumeList)
    return resumeList
}

async function getResumeById(id){
    console.log("here")
    if (id === 'lts' || id ==="latest" || id ==="current" || id === "-1" || id ===-1)
        resume = await resumeCollection.findOne({},{}, {sort: {'created_at' : -1}})
    else
        resume =  await resumeCollection.findOne({version:id})
    return resume
}

module.exports = {
    loadResume,
    getAllResumes,
    getResumeById
}

// const resumeV1 = {
//     version: 1,
//     name : "Oscar Alexis Delgadol",
//     email : "oscardel413@gmail.com",
//     github: "https://github.com/oscardel13",
//     phone: "720-219-5293",
//     linkedin: "https://www.linkedin.com/in/oscardel13/",
//     experiences : [
//         {
//             title: "Software Engineer",
//             company: "FitNxs ",
//             startDate: "Jan 2021",
//             endDate: "Mar 2023",
//             description: `Developing a modern web application built on Django, JavaScript, and GCP
//             Responsible for the entire life-cycle of impactful features such as a profile UI for users, collaborator security, notification functionality/UI, forums functionality/UI
//             Creating functionality with a clean reactive interface utilizing Bootstrap 
//             Refactored backend to be structured modularly and utilize object-oriented patterns`
//         },
//         {
//             title: "Software Developer",
//             company: "CPCyber ",
//             startDate: "Aug 2021",
//             endDate: "Jul 2022",
//             description: `Worked on features for their internal web applications that increase productivity. 
//             Maintained a SQLite DB for 4 internal web applications. 
//             Worked with HTML/CSS, Bootstrap, Javascript, and Django to build various of features which include automation in organizing and formatting reports, adding layers of encryption for client data protection.
//             Responsible for web application maintenance.`
//         },
//         {
//             title: "Student Software Engineer",
//             company: "University of Colorado Boulder",
//             startDate: "Aug 2021",
//             endDate: "July 2022",
//             description: `Worked on features for their internal web applications that increase productivity. 
//             Maintained a SQLite DB for 4 internal web applications. 
//             Worked with HTML/CSS, Bootstrap, Javascript, and Django to build various of features which include automation in organizing and formatting reports, adding layers of encryption for client data protection.
//             Responsible for web application maintenance.`
//         }
//     ],
//     educations : [
//         {
//             school: "University of Colorado Boulder",
//             major: "Computer Science",
//             startDate: "Aug 2015",
//             endDate: "May 2020"
//         }
//     ],
//     certificates: [
//         {
//             name: "Complete NodeJS Developer in 2023",
//             organization: "Udemy / Zero to Mastery",
//             issueDate: "Feb 2023",
//             credentialId: "UC-97338c62-f9c9-43fb-9abe-c8f3c9b4c46b",
//             credentialURL: "https://ude.my/UC-97338c62-f9c9-43fb-9abe-c8f3c9b4c46b"
//         },
//         {
//             name: "Complete React Developer in 2023",
//             organization: "Udemy / Zero to Mastery",
//             issueDate: "Feb 2023",
//             credentialId: "UC-f26cc88d-e739-4f44-a745-ce9fc467ae24",
//             credentialURL: "https://ude.my/UC-f26cc88d-e739-4f44-a745-ce9fc467ae24"
//         }
//     ],
//     skills : ["NodeJS", "JavaScript", "Python", "MongoDB", "HTML", "CSS", "React", "Django", "AWS", "TypeScript", "Express", "Docker", "Kubernetes", "GraphQL"],
//     projects: [
//         {
//             name: "Nasa Project",
//             url: "http://34.217.62.96:8000/launch",
//             techStack: ["NodeJS", "Express", "react", "MongoDB", "OAuth 2.0", "REST API", "Docker", "Github Actions"],
//             description: `Build the frontend using React and a module "arwes" that gave the page a futuristic feel 
//             Build the back end on Node.js using express module for RESTful APIs
//             Used PM2 to start Cluster to increase performance
//             Build API tests with Jest`
//         },
//         {
//             name: "Crwn-Clothing-v2",
//             url: "https://super-pegasus-295b0b.netlify.app/",
//             techStack: ["react", "strip", "redux", "firebase"],
//             description: `Utilized React to build an eCommerce Single Page Application with Firebase as the database.
//             Utilized styled-components to build components 
//             Used Redux, redux saga, and redux persist to handle state management
//             Deployed the application on the web using Netlify with serverless functions.
//             Added safety and static typing by writing in TypeScript`
//         },
//         {
//             name: "Empower Canine",
//             url: "https://empowercanine.com/",
//             techStack: ["django", "bootstrap", "javascript", "gcp", "docker"],
//             description: `Build web application on Django, JavaScript and deployed using Docker on GCP app engine. 
//             Utilized bootstrap, html, and CSS to create clean and reactive interface.
//             Build features to monitors business expenses, revenue, and costs and build graphs in UI to represent data.`
//         }
//     ]
// }