import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';

import { ResumeContainer, ResumeCard } from "./resume-section.styles"

const ResumeSection = () => {
    return (
        <ResumeContainer>
            <h1 style={{"textAlign":"center"}}>My <strong>Resume</strong></h1>
            <Row>
                <Col>
                    <Row>
                        <h3>My <strong>Educations</strong></h3>
                        <ResumeCard style={{ width: '80%' }}>
                            <Card.Body>
                                <Card.Title>University of Colorado at Boulder</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Bachelor of Arts, Computer Science</Card.Subtitle>
                                <Card.Text>
                                    Where I started to code and found my hobbies. Founded the CU Bouldering Club
                                </Card.Text>

                            </Card.Body>
                        </ResumeCard>
                    </Row>
                    <Row>
                        <h3>My <strong>Certificates</strong></h3>
                    </Row>
                </Col>
                <Col>
                    <h3>My <strong>Experience</strong></h3>
                </Col>
            </Row>
        </ResumeContainer>
    )
}

export default ResumeSection