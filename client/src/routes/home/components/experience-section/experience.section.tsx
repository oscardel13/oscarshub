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
                        Where I started to code and found my hobbies. Founded the CU Bouldering Club
                    </ResumeCard.Text>
                    <small className="text-muted">January 2021 - March 2023</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>CPCyber</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        Where I started to code and found my hobbies. Founded the CU Bouldering Club
                    </ResumeCard.Text>
                    <small className="text-muted">August 2021 - July 2022</small>
                </ResumeCard.Body>
            </ResumeCard>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>University of Colorado at Boulder</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Student Software Engineer</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        Where I started to code and found my hobbies. Founded the CU Bouldering Club
                    </ResumeCard.Text>
                    <small className="text-muted">August 2017 - December 2019</small>
                </ResumeCard.Body>
            </ResumeCard>
        </>
    )
}

export default ExperienceSection