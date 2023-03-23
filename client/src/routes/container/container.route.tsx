import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';


import InfoBar from "../../components/info-bar/info-bar.component";
import SwapMenu from "../../components/swap-menu/swap-menu.component";

import './container.styles.css'

const AppContainer = () => {

    // type style{
    //     padding-top: String
    //     back
    // }
    const swapMenuStyles = {
        "paddingTop": "20px"
    }
    return (
        <Container id="main">
            <Row id="main-row">           
                <Col lg={3} >
                    <Container id="InfoBar">
                        <InfoBar/>
                    </Container>
                </Col>               
                <Col lg={9} xs={12}>
                    <SwapMenu/>
                    <Row>
                        <div className="content">
                            <Outlet/>
                        </div>    
                    </Row>                               
                </Col>
            </Row>
        </Container>
    )
}

export default AppContainer;