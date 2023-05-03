import { ResumeCard } from '../resume-section/resume-section.styles';

const ExperienceSection = () => {
    return (
        <>
            <h4>Experience</h4>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>FitNxs</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        As a key member of the FitNxs startup, I played a pivotal role in developing a modern web application using Django, JavaScript, and GCP. I led the entire life-cycle of impactful features, including a clean, reactive interface, and restructured the backend using modular design and object-oriented programming principles. I effectively managed the entire development process of user-centric features, working closely with a team to delegate tasks based on strengths and interests for maximum productivity. 
                    </ResumeCard.Text>
                    <small className="text-muted">January 2021 - March 2023</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>CPCyber</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        As a software developer at CPCyber, I spearheaded impactful projects that streamlined productivity and enhanced internal web applications. I implemented robust encryption protocols to protect sensitive client data and proactively identified and addressed issues to ensure uninterrupted operations. My contributions were instrumental in driving operational excellence and helping CPCyber maintain a competitive edge.
                    </ResumeCard.Text>
                    <small className="text-muted">August 2021 - July 2022</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>University of Colorado at Boulder</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Student Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        As a student software engineer at the University of Colorado Boulder, I made significant contributions to the project by automating web forms with selenium, removing redundant code, implementing a Dynamic Link Library, and upgrading legacy Imacros to c# and selenium, resulting in a threefold increase in runtime and a significant improvement in accuracy. Through my work, I demonstrated my commitment to delivering high-quality software solutions while continuously pushing myself to learn and improve my skills.
                    </ResumeCard.Text>
                    <small className="text-muted">August 2017 - December 2019</small>
                </ResumeCard.Body>
            </ResumeCard>
        </>
    )
}

export default ExperienceSection