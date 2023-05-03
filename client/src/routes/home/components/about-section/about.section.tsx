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
                            Welcome to Oscar's Hub! I'm Oscar, a first-generation Mexican-American software engineer. I discovered my love for programming while studying at the University of Colorado Boulder, and since then, I've been constantly learning and exploring different sectors of the tech industry to expand my skillset.
                        </p>
                        <p>
                            I believe that having a deep understanding of different technologies is crucial for becoming a solution architect or holding a high leadership position. By learning about various sectors like cloud computing, cybersecurity, and machine learning, I can better understand how different technologies can work together to create robust, scalable, and secure software solutions.
                        </p>
                        <p>
                            I am dedicated to building strong technical and soft skills, and I focus on consistently working on challenging projects, learning new skills, and taking care of my personal health and well-being. Check out my portfolio website to explore my past projects, skillset, and interests. Thanks for visiting, and I'm excited to share my journey with you!
                        </p>
                    </AboutText>
                </Col>
            </Row>
        </AboutContainer>
    )
}

export default AboutSection