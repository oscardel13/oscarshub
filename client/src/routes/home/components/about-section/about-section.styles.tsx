import { Image } from 'react-bootstrap'

import styled from 'styled-components'

export const AboutImage = styled(Image)`
    width: 80%;
`

export const AboutSectionDiv = styled.section`
    text-align: center;
    padding-top: 20px;
`

export const AboutText = styled.div`
    padding-top: 25%;
    text-align: left;

    @media only screen and (max-width: 992px){
        padding-top: 5%
    }
`