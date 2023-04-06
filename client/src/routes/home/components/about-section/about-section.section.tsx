import { Col, Row } from "react-bootstrap"
import { AboutImage, AboutSectionDiv } from "./about-section.styles"

import ProfilePicture from '../../../../assets/profile.jpg'

const AboutSection = () => {
    return (
        <AboutSectionDiv id="about-section">
            <Row>
                <Col lg={6}>
                    <AboutImage src={ProfilePicture}/>
                </Col>
                <Col lg={6}>About me</Col>
            </Row>
        </AboutSectionDiv>
    )
}

export default AboutSection