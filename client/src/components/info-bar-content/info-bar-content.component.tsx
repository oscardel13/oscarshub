import InfoBarKnowledge from '../info-bar-knowledge/info-bar-knowledge.component';
import InfoBarContact from '../info-bar-contact/info-bar-contact.component';
import InfoBarHardSkills from '../info-bar-hard-skills/info-bar-hard-skills.component';
import InfoBarCV from '../info-bar-cv/info-bar-cv.component';

import { InfoBarContentScrollDiv } from './info-bar-content.styles';


const InfoBarContent = () =>{
    return(
        <InfoBarContentScrollDiv>

            <InfoBarContact/>
            <hr />
            <InfoBarHardSkills/>
            <hr/>
            <InfoBarKnowledge/>
            <hr/>
            <InfoBarCV/>   

        </InfoBarContentScrollDiv>
    )
}

export default InfoBarContent