import ResumeCard from '../../../../components/resume-card/resume-card.component'

const EducationSection = () => {
    return(
        <div className='flex flex-col gap-3'>
            <h4>Education</h4>
            <ResumeCard
                title='University of Colorado at Boulder'
                subtitle='Bachelor of Arts, Computer Science'
                description='Where I started to code and found my hobbies. Founded the CU Bouldering Club'
                dates='August 2015 - May 2020'
            />
        </div>
    )
}

export default EducationSection