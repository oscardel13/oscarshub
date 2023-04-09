import Col from 'react-bootstrap/Col'
import EducationSection from '../education-section/education.section';
import CertificateSection from '../certificates-section/certificates.section';
import ExperienceSection from '../experience-section/experience.section';

import { ResumeContainer, ResumeRow } from "./resume-section.styles"

const ResumeSection = () => {
    return (
        <ResumeContainer id='resume-section'>
            <h1 style={{"textAlign":"center"}}>My <strong>Resume</strong></h1>
            <ResumeRow>
                <Col lg={6}>
                    <ResumeRow>
                        <EducationSection/>
                    </ResumeRow>
                    <ResumeRow>
                        <CertificateSection/>
                    </ResumeRow>
                </Col>
                <Col lg={6}>
                    <ResumeRow>
                        <ExperienceSection/>
                    </ResumeRow>
                </Col>
            </ResumeRow>
        </ResumeContainer>
    )
}

export default ResumeSection