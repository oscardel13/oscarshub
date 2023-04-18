import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AboutImage, AboutContainer, AboutText } from "./about.styles"

import ProfilePicture from '../../../../assets/profile-2.jpg'

const AboutSection = () => {
    return (
        <AboutContainer id="about-section">
            <Row>
                <Col lg={6}>
                    <AboutImage src={ProfilePicture}/>
                </Col>
                <Col lg={6}>
                    <AboutText>
                        <h2>
                            About <strong>Me</strong>
                        </h2>
                        <p>
                            A latino Software Engineer born in Kansas and raised in Colorado and Graduaded from University of Colorado Boulder
                        </p>
                        <p>
                            I started coding when I was 18 years old and started with C++. Throughout the years I've worked on various school and personal 
                            projects always working on learning new skills. I've been really getting in Full stack engineering but have a huge intrest and 
                            Machine Learning Programing. I spend my free time working on 2 start ups, FitNxs, spending time with my dog milo, 
                            and rock climbing.
                        </p>
                    </AboutText>
                </Col>
            </Row>
        </AboutContainer>
    )
}

export default AboutSection