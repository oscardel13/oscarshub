import SwapMenuDropDownCard from "../swap-menu-dropdown-card/swap-menu-dropdown-card.component"

import { newTab } from "../../utils/repeated_functions/repearted_functions"
import { SwapMenuDropdownMenu } from "./swap-menu-dropdown.styles"

import NasaProjectPicture from '../../assets/nasa.png'
import CrwnClothingPicture from '../../assets/crwn-192x192.png'
import EmpowerCaninePicture from '../../assets/empowercanine.png'
import ApolloLogo from '../../assets/apollo_logo.png'

const SwapMenuDropdown = () => {
    return (
        <SwapMenuDropdownMenu title="Other Sites" id="basic-nav-dropdown">
            <SwapMenuDropdownMenu.Item onClick={()=>{newTab("http://nasaproject.oscarshub.com/")}}>
                <SwapMenuDropDownCard img={NasaProjectPicture} title={"Nasa Project"} whiteBackground={true}/>
            </SwapMenuDropdownMenu.Item>
            <SwapMenuDropdownMenu.Divider />
            <SwapMenuDropdownMenu.Item onClick={()=>newTab("http://crwnclothing.oscarshub.com/")}>
                <SwapMenuDropDownCard img={CrwnClothingPicture} title={"Crwn Clothing"} whiteBackground={true}/>
            </SwapMenuDropdownMenu.Item>
            <SwapMenuDropdownMenu.Divider />
            <SwapMenuDropdownMenu.Item onClick={()=>newTab("https://empowercanine.com/")}>
                <SwapMenuDropDownCard img={EmpowerCaninePicture} title="Empower Canine" whiteBackground={false}/>
            </SwapMenuDropdownMenu.Item>
            <SwapMenuDropdownMenu.Divider />
            <SwapMenuDropdownMenu.Item onClick={()=>newTab("https://oscarshub.com/api/graphql")}>
                <SwapMenuDropDownCard img={ApolloLogo} title="GraphQL Sandbox" whiteBackground={true}/>
            </SwapMenuDropdownMenu.Item>
        </SwapMenuDropdownMenu>
    )
}

export default SwapMenuDropdown