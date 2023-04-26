import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

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

export const SwapMenuRow = styled(Row)`
    width: 100%;
`