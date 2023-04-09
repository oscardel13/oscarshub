import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

export const ProjectContainer = styled.section`
    padding-top: 40px;
    height: 920px;
    padding-right: 20px;
    // text-align: center;
`
export const ProjectCard = styled(Card)`
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    // width: 85%;
    margin-top: 20px;
    // margin-left: 10px;
`

export const ProjectRow = styled(Row)`
    padding-top: 25px;
`