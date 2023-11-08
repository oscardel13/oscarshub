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
                        Develop a modern web application using Django, JavaScript deployed on GCP.
                    </ResumeCard.Text>
                    <small className="text-muted">January 2021 - Oct 2022</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>CPCyber</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        Maintain two internal web applications using Django.
                    </ResumeCard.Text>
                    <small className="text-muted">August 2021 - July 2022</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>University of Colorado at Boulder</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Student Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                         Automate web forms using Selenium in C#
                    </ResumeCard.Text>
                    <small className="text-muted">August 2017 - December 2019</small>
                </ResumeCard.Body>
            </ResumeCard>
        </>
    )
}

export default ExperienceSection