import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const SwapMenuNavBar = styled(Navbar)`
    background-color: #20202a;
`

export const SwapMenuInfoBarButton = styled.a`
    position: relative;
    right: 15px;
    color: #8c8c8e;
    @media only screen and (min-width: 993px){
        display: none;
    }

    @media only screen and (max-width: 576px){
        position: relative;
        right: 38%;
    }
`

export const SwapMenuNav = styled(Nav)`
    color: #8c8c8e;

    :focus{
        color: #8c8c8e
    }
`