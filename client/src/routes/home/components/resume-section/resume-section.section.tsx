import EducationSection from '../education-section/education.section';
import CertificateSection from '../certificates-section/certificates.section';
import ExperienceSection from '../experience-section/experience.section';

const ResumeSection = () => {
    return (
        <section id='resume-section' className='py-5'>
            <h1 style={{"textAlign":"center"}}>My <strong>Resume</strong></h1>
            <div className='flex flex-col md:flex-row gap-5 pt-10'>
                <div className='flex flex-col'>
                    <div className='pt-10'>
                        <EducationSection/>
                    </div>
                    <div className='pt-10'>
                        <CertificateSection/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-10'>
                        <ExperienceSection/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection