import Image from 'react-bootstrap/Image'

import styled from 'styled-components'

export const AboutImage = styled(Image)`
    width: 95%;
`

export const AboutContainer = styled.section`
    text-align: center;
    padding-top: 20px;
    padding-right: 20px;
`

export const AboutText = styled.div`
    padding-top: 25%;
    text-align: left;

    @media only screen and (max-width: 992px){
        padding-top: 5%
    }
`