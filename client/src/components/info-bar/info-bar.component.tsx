import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';
import CloseButton from 'react-bootstrap/CloseButton';

import HardSkill from '../hard-skill/hard-skill.component';
import InfoBarKnowledge from '../info-bar-knowledge/info-bar-knowledge.component';

import profilePicture from '../../assets/oscar.jpg'
// import oscarResume from '../../assets/OscarsResume.pdf'
import { ReactComponent as LinkedIn } from '../../assets/linkedin-3.svg'
import { ReactComponent as GitHub } from '../../assets/github-1.svg'
import { ReactComponent as StackOverFlow } from '../../assets/stack-overflow.svg'
import { ReactComponent as Docker } from '../../assets/docker.svg'


import './info-bar.styles.css'

const InfoBar = (props: {hide: () => void}) =>{
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('OscarsResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    } 

    return (
        <Stack gap={3} id="info-bar">
            <div className="header">
                <div>
                    <a onClick={props.hide} id="closeInfoBar">
                        <CloseButton variant="white"/>
                    </a>
                </div>
                <div className="avatar">
                    <Image roundedCircle src={profilePicture}></Image>
                </div>
                <div className="name">
                    <h5>Oscar Delgado</h5>
                </div>
                <div className="description">
                    <small>Software Engineer</small>
                    <br/>
                    <small>Full Stack Engineer</small>
                </div>
            </div>

            <div className="scroll-frame">
                <div className="scroll-content">
                    <div className="info">
                        <Stack direction="horizontal">
                            <h6>Residence:</h6>
                            <div className='ms-auto'>
                                <small>USA</small>
                            </div>
                        </Stack>
                        <Stack direction="horizontal">
                            <h6>City:</h6>
                            <div className='ms-auto'>
                                <small>Denver</small>
                            </div>
                        </Stack>
                        <Stack direction="horizontal">
                            <h6>Age:</h6>
                            <div className='ms-auto'>
                                <small>25</small>
                            </div>
                        </Stack>
                    </div>

                    <hr />

                    <div className="hard skills">
                        <Stack gap={3}>
                            <HardSkill name="NodeJS" percent={85}/>
                            <HardSkill name="React" percent={80}/>               
                            <HardSkill name="MongoDB" percent={75}/>
                            <HardSkill name="HTML" percent={95}/>
                            <HardSkill name="CSS" percent={70}/>
                            <HardSkill name="JavaScript" percent={85}/>  
                            <HardSkill name="Python" percent={95}/> 
                            <HardSkill name="Django" percent={80}/>                   
                        </Stack>
                    </div>

                    <hr />

                    <InfoBarKnowledge/>

                    <hr />

                    <div className="cv">
                        <a onClick={onButtonClick}>&#10233; DOWNLOAD CV &#10232;</a>
                        {/* <a href="../../assets/OscarsResume.pdf" download>&#10233; DOWNLOAD CV &#10232;</a> */}
                    </div>

                </div>
            
            </div>

            <div className="socials">
                <Stack direction="horizontal">
                    <a href='https://www.linkedin.com/in/oscardel13/'>
                        <LinkedIn style={{fill: "#0077B5"}}/>
                    </a>
                    <a href="https://github.com/oscardel13">
                        <GitHub/>
                    </a>
                    <a href='https://stackoverflow.com/users/14166743/oscar-delgado'>
                        <StackOverFlow/>
                    </a>
                    <a href='https://hub.docker.com/u/oscardel13'>
                        <Docker/>
                    </a>
                </Stack>
            </div>
        </Stack>
    )

}

export default InfoBar