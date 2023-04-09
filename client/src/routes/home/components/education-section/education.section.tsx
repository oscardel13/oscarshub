import { ResumeCard } from '../resume-section/resume-section.styles';

const EducationSection = () => {
    return(
        <>
            <h4>Education</h4>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>University of Colorado at Boulder</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Bachelor of Arts, Computer Science</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        Where I started to code and found my hobbies. Founded the CU Bouldering Club
                    </ResumeCard.Text>
                    <small className="text-muted">August 2015 - May 2020</small>
                </ResumeCard.Body>
            </ResumeCard>
        </>
    )
}

export default EducationSection