import { Outlet } from "react-router-dom";
import { useState } from "react";

import InfoBar from "../../components/info-bar/info-bar.component";
import SwapMenu from "../../components/swap-menu/swap-menu.component";
import Footer from "../../components/footer/foot.component";

import { MainContainer, MainRow, InfoBarContainer, ContentContainer, ContentRow, ContentFooter } from './container.styles'

const AppContainer = () => {
    const [isHidden, setIsHidden] = useState(true)

    const onHideEvent = () => {
        setIsHidden(!isHidden)
    }
    return (
        <MainContainer>
            <MainRow>           
                <InfoBarContainer lg={3} xs={0} id="InfoBar" hide={isHidden.toString()}>
                        <InfoBar hide={onHideEvent}/>
                </InfoBarContainer>               
                <ContentContainer lg={9} xs={12} hide={isHidden.toString()}>
                    <SwapMenu hide={onHideEvent}/>
                    <ContentRow id="home">
                            <Outlet/>
                            
                    </ContentRow>  
                    <Footer/>                              
                </ContentContainer>
            </MainRow>
        </MainContainer>
    )
}

export default AppContainer;