import Col from "react-bootstrap/Col"

import EmpowerCaninePicture from '../../../../assets/empowercanine.png'
import CrwnClothingPicture from '../../../../assets/crwn-192x192.png'
import NasaProjectPicture from '../../../../assets/nasa.png'

import { ProjectContainer, ProjectRow, ProjectCard } from "./project.styles"


const ProjectSection = () => {
    return (
        <ProjectContainer id='project-section'>
            <h1 style={{"textAlign":"center"}}>My <strong>Projects</strong></h1>
            <ProjectRow>
                <Col lg={4}>
                <ProjectCard>
                    <ProjectCard.Img variant="top" src={CrwnClothingPicture} style={{backgroundColor : "white", padding: "60px"}}/>
                    <ProjectCard.Body>
                    <ProjectCard.Title>Crwn Clothing</ProjectCard.Title>
                    <ProjectCard.Text>
                        My brother decided to run his own dog training business and asked if 
                        I could build him a website. Build it with django backend with it's 
                        standard db (sqlite). For the frontend used HTML/CSS with bootstrap 
                        library and JavaScript. Then deployed it with using Docker on GCP app engine.
                    </ProjectCard.Text>
                    <small>
                        React | Firebase | TypeScript 
                    </small>
                    </ProjectCard.Body>
                </ProjectCard>
                </Col>
                <Col lg={4}>
                <ProjectCard>
                    <ProjectCard.Img variant="top" src={NasaProjectPicture} style={{backgroundColor : "white" /*"#021114"*/, padding: "60px"}}/>
                    <ProjectCard.Body>
                    <ProjectCard.Title>Nasa Project</ProjectCard.Title>
                    <ProjectCard.Text>
                        My brother decided to run his own dog training business and asked if 
                        I could build him a website. Build it with django backend with it's 
                        standard db (sqlite). For the frontend used HTML/CSS with bootstrap 
                        library and JavaScript. Then deployed it with using Docker on GCP app engine.
                    </ProjectCard.Text>
                    <small>
                        NodeJS | React | MongoDB | Docker 
                    </small>
                    </ProjectCard.Body>
                </ProjectCard>
                </Col>
                <Col lg={4}>
                <ProjectCard>
                    <ProjectCard.Img variant="top" src={EmpowerCaninePicture} />
                    <ProjectCard.Body>
                    <ProjectCard.Title>Empower Canine</ProjectCard.Title>
                    <ProjectCard.Text>
                        My brother decided to run his own dog training business and asked if 
                        I could build him a website. Build it with django backend with it's 
                        standard db (sqlite). For the frontend used HTML/CSS with bootstrap 
                        library and JavaScript. Then deployed it with using Docker on GCP app engine.
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