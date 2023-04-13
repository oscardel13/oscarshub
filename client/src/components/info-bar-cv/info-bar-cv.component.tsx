import { InfoBarCVDiv } from "./info-bar-cv.styles"

// import oscarResume from '../../assets/OscarsResume.pdf'

const InfoBarCV = () => {
    return (
        <InfoBarCVDiv>
            {/* <a onClick={onButtonClick}>&#10233; DOWNLOAD CV &#10232;</a> */}
            <a href="../../assets/OscarsResume.pdf" download>&#10233; DOWNLOAD CV &#10232;</a>
        </InfoBarCVDiv>
    )
}

export default InfoBarCV
