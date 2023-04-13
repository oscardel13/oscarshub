import Stack from 'react-bootstrap/Stack';

import { ReactComponent as LinkedIn } from '../../assets/linkedin-3.svg'
import { ReactComponent as GitHub } from '../../assets/github-1.svg'
import { ReactComponent as StackOverFlow } from '../../assets/stack-overflow.svg'
import { ReactComponent as Docker } from '../../assets/docker.svg'

import { InfoBarSocialsDiv } from './info-bar-socials.styles';

const InfoBarSocials = () =>{
    return (
        <InfoBarSocialsDiv>
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
        </InfoBarSocialsDiv>
    )
}

export default InfoBarSocials