import Stack from 'react-bootstrap/Stack';

import { newTab } from "../../utils/repeated_functions/repearted_functions"

import { ReactComponent as LinkedIn } from '../../assets/linkedin-3.svg'
import { ReactComponent as GitHub } from '../../assets/github-1.svg'
import { ReactComponent as StackOverFlow } from '../../assets/stack-overflow.svg'
import { ReactComponent as Docker } from '../../assets/docker.svg'

import { InfoBarSocialsDiv, SvgBackground } from './info-bar-socials.styles';

const InfoBarSocials = () =>{
    return (
        <InfoBarSocialsDiv>
            <Stack direction="horizontal">
                <a onClick={()=>{newTab("https://www.linkedin.com/in/oscardel13/")}}>
                    <SvgBackground>
                        <LinkedIn style={{fill: "#0077B5"}}/>
                    </SvgBackground>
                </a>
                <a onClick={()=>{newTab("https://github.com/oscardel13")}}>
                    <GitHub/>
                </a>
                <a onClick={()=>{newTab("https://stackoverflow.com/users/14166743/oscar-delgado")}}>
                    <StackOverFlow/>
                </a>
                <a onClick={()=>{newTab("https://hub.docker.com/u/oscardel13")}}>
                    <Docker/>
                </a>
            </Stack>
        </InfoBarSocialsDiv>
    )
}

export default InfoBarSocials