import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProjectContainer = styled.section`
    padding-top: 100px;
    padding-right: 20px;
    @media only screen and (max-width: 1200px){
        height: unset;
    }
`
export const ProjectCard = styled(Card)`
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    // width: 85%;
    margin-top: 20px;
    border-radius: unset;
    .h5{
        color: wheat;
    }

    small{
        color: grey;
    }
    p{
        color: aliceblue;
    }
    .card-img-top{
        border-top-left-radius: unset;
        border-top-right-radius: unset;
    }

    .btn{
        width: 100%;
    }
`

export const ProjectRow = styled(Row)`
    padding-top: 40px;
`

