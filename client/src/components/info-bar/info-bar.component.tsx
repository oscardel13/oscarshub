import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';

import HardSkill from '../hard-skill/hard-skill.component';
import InfoBarKnowledge from '../info-bar-knowledge/info-bar-knowledge.component';

import profilePicture from '../../assets/oscar.jpg'
// import oscarResume from '../../assets/OscarsResume.pdf'
import './info-bar.styles.css'

const InfoBar = (props: {hide: ()=>void}) =>{
    return (
        <Stack gap={3} id="info-bar">
            <div className="header">
                <div>
                    <a onClick={props.hide} id="closeInfoBar">
                        <i className="fas fa-ellipsis-v" style={{'fontSize':'26px'}}></i>
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
                        {/* TO DO!!! Make endpoint to download resume */}
                        <a href="">&#10233; DOWNLOAD CV &#10232;</a>
                    </div>

                </div>
            
            </div>

            <div className="socials">
                <Stack direction="horizontal">
                    <a href='https://www.linkedin.com/in/oscardel13/'>
                        <i className="fab fa-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/oscardel13">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href='https://stackoverflow.com/users/14166743/oscar-delgado'>
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                    <a href='https://hub.docker.com/u/oscardel13'>
                        <i className="fab fa-docker"></i>
                    </a>
                </Stack>
            </div>
        </Stack>
    )

}

export default InfoBar