import { ResumeCard } from "../resume-section/resume-section.styles"

const CertificateSection = () =>{
    return(
        <>
            <h4>Certificates</h4>
            <ResumeCard>
                <ResumeCard.Body>
                    <ResumeCard.Title>Completed NodeJs Developer in 2023</ResumeCard.Title>
                    <ResumeCard.Subtitle className="mb-2 text-muted">Udemy | Zero to Master</ResumeCard.Subtitle>
                    <ResumeCard.Text>
                        50 Hour course on the basics and advance technologies for a NodeJS developer.
                    </ResumeCard.Text>
                    <small className="text-muted">August 2015 - May 2020</small> {/* https://udemy-certificate.s3.amazonaws.com/image/UC-97338c62-f9c9-43fb-9abe-c8f3c9b4c46b.jpg */}
                </ResumeCard.Body>
            </ResumeCard>
                <ResumeCard>
                    <ResumeCard.Body>
                        <ResumeCard.Title>Completed React Developer in 2023</ResumeCard.Title>
                        <ResumeCard.Subtitle className="mb-2 text-muted">Udemy | Zero to Master</ResumeCard.Subtitle>
                        <ResumeCard.Text>
                            45 Hour course on the basics and advance technologies for a React developer.
                        </ResumeCard.Text>
                        <small className="text-muted">August 2015 - May 2020</small> {/* https://udemy-certificate.s3.amazonaws.com/image/UC-f26cc88d-e739-4f44-a745-ce9fc467ae24.jpg */}
                    </ResumeCard.Body>
                </ResumeCard>
        </>
    )
}

export default CertificateSection