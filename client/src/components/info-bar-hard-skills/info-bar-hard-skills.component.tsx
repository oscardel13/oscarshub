import Stack from 'react-bootstrap/Stack';
import HardSkill from '../info-bar-hard-skill/info-bar-hard-skill.component';

const InfoBarHardSkills = () => {
    return (
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
    )
}

export default InfoBarHardSkills