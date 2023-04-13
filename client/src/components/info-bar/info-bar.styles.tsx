import styled from "styled-components"
import Stack from 'react-bootstrap/Stack';

export const InfoBarStack = styled(Stack)`
    background: rgb(32,32,42,0.95);
    width: 100%;
    min-width: 220px;
    /* max-width: ; */
    height: 100%;
    position: relative;
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;
    padding-left: 0;
`
