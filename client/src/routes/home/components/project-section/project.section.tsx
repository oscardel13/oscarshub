import Col from "react-bootstrap/Col"

import EmpowerCaninePicture from '../../../../assets/empowercanine.png'
import CrwnClothingPicture from '../../../../assets/crwn-192x192.png'
import NasaProjectPicture from '../../../../assets/nasa.png'

import { ProjectContainer, ProjectRow, ProjectCard } from "./project.styles"

import { newTab } from "../../../../utils/repeated_functions/repearted_functions"

const ProjectSection = () => {
    return (
        <ProjectContainer id='project-section'>
            <h1 style={{"textAlign":"center"}}>My <strong>Projects</strong></h1>
            <ProjectRow>
                <Col lg={4}>
                <ProjectCard>
                    <ProjectCard.Img variant="top" src={CrwnClothingPicture} style={{backgroundColor : "white", padding: "60px", cursor:"pointer"}} onClick={()=>{newTab("https://crwnclothing.oscarshub.com/")}}/>
                    <ProjectCard.Body>
                    <ProjectCard.Title>Crwn Clothing</ProjectCard.Title>
                    <ProjectCard.Text>
                        I developed an eCommerce single-page application using React and Firebase as the database, providing users with a seamless shopping experience. I leveraged React libraries such as styled-components, react-router-dom, and ReduxJS to enhance the functionality and user interface. To improve the code quality, I incorporated TypeScript, adding static types and improving type safety. With these additions, the application was more stable and user-friendly, providing a secure and efficient shopping experience.
                    </ProjectCard.Text>
                    <small>
                        React | Firebase | TypeScript 
                    </small>
                    </ProjectCard.Body>
                </ProjectCard>
                </Col>
                <Col lg={4}>
                <ProjectCard>
                    <ProjectCard.Img variant="top" src={NasaProjectPicture} style={{backgroundColor : "white" /*"#021114"*/, padding: "60px",cursor:"pointer"}} onClick={()=>{newTab("https://nasaproject.oscarshub.com/")}}/>
                    <ProjectCard.Body>
                    <ProjectCard.Title>Nasa Project</ProjectCard.Title>
                    <ProjectCard.Text>
                        Built a robust back-end for a web application using MongoDB and Node.js, leveraging the Mongoose module for schema creation and object modeling. Implemented RESTful APIs using Express and ensured their functionality with the Jest framework. Set up a seamless deployment pipeline using GitHub Actions and Docker Images, ultimately deploying the application to an AWS EC2 instance. By integrating best practices for database design and deployment, this project demonstrates my ability to create reliable and efficient back-end systems for web applications.
                    </ProjectCard.Text>
                    <small>
                        NodeJS | React | MongoDB | Docker 
                    </small>
                    </ProjectCard.Body>
                </ProjectCard>
                </Col>
                <Col lg={4}>
                <ProjectCard>
                        <ProjectCard.Img variant="top" src={EmpowerCaninePicture} onClick={()=>(newTab("https://empowercanine.com/"))} style={{cursor:"pointer"}}/>
                    <ProjectCard.Body>
                    <ProjectCard.Title>Empower Canine</ProjectCard.Title>
                    <ProjectCard.Text>
                        As a favor to my brother, I built a website for his dog training business. Leveraging Django for the backend and utilizing the standard SQLite database, I was able to create a robust and reliable web application. For the frontend, I utilized HTML, CSS, and the Bootstrap library, combined with JavaScript, to create a responsive and visually appealing user interface. To ensure ease of deployment and maintenance, I utilized Docker and hosted the application on Google Cloud Platform's App Engine. The website includes features such as information about the business, services offered, and a contact form.
                    </ProjectCard.Text>
                    <small>
                        HTML | CSS | JS | Django | sqlite | Docker
                    </small>
                    </ProjectCard.Body>
                </ProjectCard>
                </Col>
            </ProjectRow>
        </ProjectContainer>
    )
}

export default ProjectSection