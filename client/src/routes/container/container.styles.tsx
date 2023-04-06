import styled from 'styled-components'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MainContainer = styled(Container)`
    padding-top: 15px;
    padding-bottom: 15px;
    opacity: 95%;
    height: calc(100vh - 30px);
    @media only screen and (max-width: 576px){
        padding-bottom: 0;
        height: 100vh;
        padding-top: 0;
    }
`

export const MainRow = styled(Row)`
    background: #2a2a38; 
    color: wheat;
    height: 100%;
`

export const InfoBarContainer = styled(Col)<{hide: Boolean}>`
    padding-left: 0; 
    height: 100%;
    // transition: 2s ease-in-out

    @media only screen and (max-width: 991.99px){
        ${props => (props.hide ? {"display":"none"}: {"display":"contents"} )};

    }
`

export const ContentContainer = styled(Col)<{hide: Boolean}>`
    overflow-y: scroll;
    height: inherit;
    @media only screen and (max-width: 991.99px){
        ${props => (!props.hide ? {"display":"none"}: {"display":"unset"} )};

    }
`

export const ContentRow = styled(Row)`
    padding-top : 12px;
`
