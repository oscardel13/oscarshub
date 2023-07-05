import styled from 'styled-components'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MainContainer = styled(Container)`
    padding-top: 15px;
    padding-bottom: 15px;
    // opacity: 95%;
    height: calc(100vh - 30px);
    @media only screen and (max-width: 576px){
        padding-bottom: 0;
        height: 100vh;
        padding-top: 0;
    }
`

export const MainRow = styled(Row)`
    background: rgb(42, 42, 56, 0.95);
    color: wheat;
    height: 100%;
`

export const InfoBarContainer = styled(Col)<{hide: string}>`
    padding-left: 0; 
    height: 100%;
    transition: 0.5s ease-in-out 0.5s;
    @media only screen and (max-width: 992px){
        ${props => (props.hide === 'true' ? {"display":"none"}: {"display":"contents"} )};

    }
`

export const ContentContainer = styled(Col)<{hide: Boolean}>`
    overflow-y: scroll;
    height: inherit;
    transition: 0.5s ease-in-out 0.5s;
    @media only screen and (max-width: 992px){
        ${props => (!props.hide ? {"display":"none"}: {"display":"unset"} )};

    }
`

export const ContentRow = styled(Row)`
    padding-top : 12px;
`

export const ContentFooter = styled(Row)`
    position: relative;
    width: 98%;
    left: 1%;
    padding: 4px;
    z-index: 1020;
    background: #20202a;
    height: 50px;
`