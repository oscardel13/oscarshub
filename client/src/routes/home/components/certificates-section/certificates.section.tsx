import ResumeCard from '../../../../components/resume-card/resume-card.component'

const CertificateSection = () =>{
    return(
        <div className='flex flex-col gap-3'>
            <h4>Certificates</h4>
            <ResumeCard
                title='Completed NodeJs Developer in 2023'
                subtitle='Udemy | Zero to Master'
                description='50 Hour course on the basics and advance technologies for a NodeJS developer.'
                dates='Feb 2023'
            />
            <ResumeCard
                title='Completed React Developer in 2023'
                subtitle='Udemy | Zero to Master'
                description='45 Hour course on the basics and advance technologies for a React developer.'
                dates='Feb 2023'
            />
        </div>
    )
}

export default CertificateSection