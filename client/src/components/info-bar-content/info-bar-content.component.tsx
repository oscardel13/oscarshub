import InfoBarKnowledge from '../info-bar-knowledge/info-bar-knowledge.component';
import InfoBarContact from '../info-bar-contact/info-bar-contact.component';
import InfoBarHardSkills from '../info-bar-hard-skills/info-bar-hard-skills.component';
import InfoBarCV from '../info-bar-cv/info-bar-cv.component';

const InfoBarContent = () =>{
    return(
        <div className='p-4 overflow-y-auto text-white'>
            <InfoBarContact/>
            <hr />
            <InfoBarHardSkills/>
            <hr/>
            <InfoBarKnowledge/>
            <hr/>
            <InfoBarCV/>   
        </div>
    )
}

export default InfoBarContent