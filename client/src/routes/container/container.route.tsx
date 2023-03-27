import { Outlet } from "react-router-dom";
import { useState } from "react";
import Row from 'react-bootstrap/Row';


import InfoBar from "../../components/info-bar/info-bar.component";
import SwapMenu from "../../components/swap-menu/swap-menu.component";

// import './container.styles.css'
import { MainContainer, MainRow, InfoBarContainer, ContentContainer } from './container.styles'

const AppContainer = () => {
    const [isHidden, setIsHidden] = useState(true)

    const onHideEvent = () => {
        setIsHidden(!isHidden)
    }

    return (
        <MainContainer>
            <MainRow>           
                <InfoBarContainer lg={3} id="InfoBar" hide={isHidden}>
                    {/* <Container id="InfoBar"> */}
                        <InfoBar hide={onHideEvent}/>
                    {/* </Container> */}
                </InfoBarContainer>               
                <ContentContainer lg={9} xs={12} hide={isHidden}>
                    <SwapMenu hide={onHideEvent}/>
                    <Row>
                            <Outlet/>   
                    </Row>                               
                </ContentContainer>
            </MainRow>
        </MainContainer>
    )
}

export default AppContainer;