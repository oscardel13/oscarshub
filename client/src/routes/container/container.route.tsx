import { Outlet } from "react-router-dom";
import { useState } from "react";

import InfoBar from "../../components/info-bar/info-bar.component";
import SwapMenu from "../../components/swap-menu/swap-menu.component";

import { MainContainer, MainRow, InfoBarContainer, ContentContainer, ContentRow } from './container.styles'

const AppContainer = () => {
    const [isHidden, setIsHidden] = useState(true)

    const onHideEvent = () => {
        setIsHidden(!isHidden)
    }

    return (
        <MainContainer>
            <MainRow>           
                <InfoBarContainer lg={3} id="InfoBar" hide={isHidden}>
                        <InfoBar hide={onHideEvent}/>
                </InfoBarContainer>               
                <ContentContainer lg={9} xs={12} hide={isHidden}>
                    <SwapMenu hide={onHideEvent}/>
                    <ContentRow>
                            <Outlet/>   
                    </ContentRow>                               
                </ContentContainer>
            </MainRow>
        </MainContainer>
    )
}

export default AppContainer;