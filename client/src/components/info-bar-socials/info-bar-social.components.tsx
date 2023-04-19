import Stack from 'react-bootstrap/Stack';

import { ReactComponent as LinkedIn } from '../../assets/linkedin-3.svg'
import { ReactComponent as GitHub } from '../../assets/github-1.svg'
import { ReactComponent as StackOverFlow } from '../../assets/stack-overflow.svg'
import { ReactComponent as Docker } from '../../assets/docker.svg'

import { InfoBarSocialsDiv } from './info-bar-socials.styles';

const InfoBarSocials = () =>{
    const linkedinClick = () => {
        window.open("https://www.linkedin.com/in/oscardel13/", "_blank")
    }
    const githubClick = () => {
        window.open("https://github.com/oscardel13", "_blank")
    }
    const stackoverflowClick = () => {
        window.open("https://stackoverflow.com/users/14166743/oscar-delgado", "_blank")
    }
    const dockerClick = () => {
        window.open("https://hub.docker.com/u/oscardel13", "_blank")
    }
    return (
        <InfoBarSocialsDiv>
            <Stack direction="horizontal">
                <a onClick={linkedinClick}>
                    <LinkedIn style={{fill: "#0077B5"}}/>
                </a>
                <a onClick={githubClick}>
                    <GitHub/>
                </a>
                <a onClick={stackoverflowClick}>
                    <StackOverFlow/>
                </a>
                <a onClick={dockerClick}>
                    <Docker/>
                </a>
            </Stack>
        </InfoBarSocialsDiv>
    )
}

export default InfoBarSocials