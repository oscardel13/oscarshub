import styled from "styled-components";
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';

export const ResumeContainer = styled.section`
    padding-top: 100px;
    // height: 940px;
    
    @media only screen and (max-width: 1200px){
        height: unset;
    }
`

export const ResumeCard = styled(Card)`
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    width: 85%;
    margin-top: 20px;
    margin-left: 10px;
    border-radius: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    .h5{
        color: wheat;
    }

    .text-muted {
        color: grey !important;
    }
    p{
        color: aliceblue;
    }
`

export const ResumeRow = styled(Row)`
    padding-top: 40px;
`