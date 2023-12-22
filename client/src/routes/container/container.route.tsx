import { Outlet } from "react-router-dom";
import { useState } from "react";

import InfoBar from "../../components/info-bar/info-bar.component";
import SwapMenu from "../../components/swap-menu/swap-menu.component";
import Footer from "../../components/footer/foot.component";

const AppContainer = () => {
    const [isHidden, setIsHidden] = useState(window.innerWidth < 1024)

    const onHideEvent = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div className="flex h-screen w-screen justify-center lg:py-5 overflow-hidden">
            <div className="flex text-[wheat] bg-[rgb(42,42,56,0.95)] md:w-[80rem] lg:w-[60rem] xl:w-[80rem] 2xl:w-[90rem]">           
                <div className={`h-full ease-in-out ${isHidden ? 'hidden' : 'absolute w-screen h-screen top-0 left-0 right-0 bottom-0 scrolling-disable mb-5'} lg:h-full lg:relative lg:max-w-96`}>
                        <InfoBar hide={onHideEvent}/>
                </div>               
                <div className={`overflow-y-auto ease-in-out ${isHidden ? 'block' : 'hidden'} lg:block`}>
                    <SwapMenu hide={onHideEvent}/>
                    <div className="p-4">
                            <Outlet/>  
                    </div>  
                    <Footer/>                              
                </div>
            </div>
        </div>
    ) 
}

export default AppContainer;