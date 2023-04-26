import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

export const SwapMenuDropdown = styled(NavDropdown)`
    color: #8c8c8e; 
    .dropdown-menu{
        top: 100%;
        margin-top: var(--bs-dropdown-spacer);
        left: -175%;
        width: 260px;
        background-color: rgb(61 61 78 / 95%);
    }

    @media only screen and (max-width: 576px){
        .dropdown-menu{
            left: unset;
        }
    }
`

export const SwapMenuNav = styled(Nav)`
    color: #8c8c8e;

    :focus{
        color: #8c8c8e
    }
`

export const SwapMenuRow = styled(Row)`
    width: 100%;
`

export const SwapMenuCardBody = styled(Card.Body)`
    padding-left: 0;
    padding-right: 0; 
`
export const SwapMenuCard = styled(Card)`
    border: unset;
    background-color: inherit;
    color: white;   
    :hover{
        color: black;
    }
`

export const SwapMenuCardImg = styled(Card.Img)`
    padding: 15px;
    background-color: white;
    // width: 70px;
    // height: 70px;
`