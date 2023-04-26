import styled from "styled-components";
import NavDropdown from 'react-bootstrap/NavDropdown';

export const SwapMenuDropdownMenu = styled(NavDropdown)`
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