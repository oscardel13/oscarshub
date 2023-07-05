import { InfoBarCVDiv } from "./info-bar-cv.styles"

import oscarResume from '../../assets/OscarsResume.pdf'

const InfoBarCV = () => {
    return (
        <InfoBarCVDiv>
            <a href={oscarResume} download="OscarsResume">&#10233; DOWNLOAD CV &#10232;</a>
        </InfoBarCVDiv>
    )
}

export default InfoBarCV
