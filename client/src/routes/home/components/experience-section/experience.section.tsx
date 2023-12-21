import ResumeCard from '../../../../components/resume-card/resume-card.component'

const ExperienceSection = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h4>Experience</h4>
            <ResumeCard
                title='FitNxs'
                subtitle='Software Engineer'
                description='Develop a modern web application using Django, JavaScript deployed on GCP.'
                dates='January 2021 - Oct 2022'
            />
            <ResumeCard
                title='CPCyber'
                subtitle='Software Engineer'
                description='Maintain two internal web applications using Django.'
                dates='August 2021 - July 2022'
            />
            <ResumeCard
                title='University of Colorado at Boulder'
                subtitle='Student Software Engineer'
                description='Automate web forms using Selenium in C#'
                dates='August 2017 - December 2019'
            />
        </div>
    )
}

export default ExperienceSection