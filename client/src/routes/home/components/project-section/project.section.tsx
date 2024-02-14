import EmpowerCaninePicture from '../../../../assets/empowercanine.png'
import CrwnClothingPicture from '../../../../assets/crwn-192x192.png'
import NasaProjectPicture from '../../../../assets/nasa.png'
import BlueprintBarbersPicture from '../../../../assets/blueprintbarbers.jpg'

const PROJECTS = [
    {
        name: "Blueprint Barbers",
        description: "Web Application to handle business logic for a Barbershop Business.",
        image: BlueprintBarbersPicture,
        link: "https://blueprintbarbers.co/",
        repository: "https://github.com/oscardel13/blueprintbarbers",
        technologies: [ "React", "Mongodb", "AWS", "Docker", "Stripe"]
    },
    {
        name: "Empower Canine",
        description: "Dog Training Website and Application.",
        image: EmpowerCaninePicture,
        link: "https://empowercanine.com/",
        repository: "https://github.com/oscardel13/New-Empower-Canine",
        technologies: ["NextJs", "React", "Docker", "NodeJs", "AWS", "MongoDB" ]
    },
    {
        name: "Nasa Project",
        description: "Web App connected to Space X Apis and control launches.",
        image: NasaProjectPicture,
        link: "https://nasaproject.oscarshub.com/",
        repository: "https://github.com/oscardel13/Nasa-Project",
        technologies: ["NodeJS", "React" ,"MongoDB" ,"Docker" ]
    
    },
    {
        name: "Crwn Clothing",
        description: "Basic Ecommerce Web application build with react",
        image: CrwnClothingPicture,
        link: "https://crwnclothing.oscarshub.com/",
        repository: "https://github.com/oscardel13/crwn-clothing-v2",
        technologies: [ "React", "Firebase", "TypeScript"]
    },
    
]

//TODO Needs updating
const ProjectSection = () => {
    return (
        <section id='project-section' className="py-5">
            <h1 className='text-center'>Past <strong>Projects</strong></h1>
            <br/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                PROJECTS.map((project,index) => 
                    <div className="bg-[rgba(37,37,50,0.98)]" key={index}>
                        <img src={project.image} className="cursor-pointer bg-white p-16 w-full"/>
                        <div className="flex flex-col justify-left p-3">
                            <h5>{project.name}</h5>
                            <p className='text-white'>
                                {project.description}
                            </p>
                            <div className="flex flex-row gap-3">
                                <a className="flex justify-center items-center bg-[rgb(26,17,65)] hover:bg-[rgb(87,69,167)] w-3/6 text-white px-3 py-2 rounded-md no-underline" href={project.link} target='_blank'>Site</a>
                                <a className="flex justify-center items-center bg-[white] hover:bg-gray-300 w-3/6 text-black px-3 py-2 rounded-md no-underline" href={project.repository} target='_blank'>Repository</a>
                            </div>  
                            <br/>
                            <div className='flex flex-row flex-wrap text-gray-400'>
                                {
                                    project.technologies.map((technology, index) => 
                                        <small key={technology}> {technology} | &nbsp;</small>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    )
            }

            </div>
        </section>
    )
}

export default ProjectSection