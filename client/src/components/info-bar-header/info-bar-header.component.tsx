import Image from 'react-bootstrap/Image'
import CloseButton from 'react-bootstrap/CloseButton';

import { InfoBarHeaderDiv, InfoBarHeaderAvatar, InfoBarHeaderCloseButtonContainer } from './info-bar-header.styles';

import profilePicture from '../../assets/oscar.jpg'

const InfoBarHeader = (props: {hide: () => void}) =>{
    return (
        <InfoBarHeaderDiv>
            <InfoBarHeaderCloseButtonContainer onClick={props.hide}>
                <CloseButton onClick={props.hide} variant="white"/>
            </InfoBarHeaderCloseButtonContainer>
            <InfoBarHeaderAvatar>
                <Image roundedCircle src={profilePicture}></Image>
            </InfoBarHeaderAvatar>
            <div className="name">
                <h5>Oscar Delgado</h5>
            </div>
            <div className="description">
                <small>Software Engineer</small>
                <br/>
                <small>Full Stack Engineer</small>
            </div>
        </InfoBarHeaderDiv>
    )
}

export default InfoBarHeader