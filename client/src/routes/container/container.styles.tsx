import styled from 'styled-components'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MainContainer = styled(Container)`
    padding-top: 15px;
    padding-bottom: 15px;
    opacity: 95%;
`

export const MainRow = styled(Row)`
    background: #2a2a38; 
    color: wheat;
    height: calc(100vh - 30px);
`

export const InfoBarContainer = styled(Col)<{hide: Boolean}>`
    padding-left: 0; 
    height: 100%;
    // transition: 2s ease-in-out

    @media only screen and (max-width: 991.99px){
        ${props => (props.hide ? {"display":"none"}: "" )};

    }
`

export const ContentContainer = styled(Col)<{hide: Boolean}>`
@media only screen and (max-width: 991.99px){
    ${props => (!props.hide ? {"display":"none"}: "" )};

}
`
