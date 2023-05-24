import Container from 'react-bootstrap/Container';

import { ReactComponent as ProfileSVG } from '../../assets/profile.svg';

import SwapMenuDropdown from '../swap-menu-dropdown/swap-menu-dropdown.component';

import { SwapMenuNav, SwapMenuNavBar, SwapMenuInfoBarButton } from './swap-menu.styles';


const SwapMenu = (props: {hide: ()=>void}) =>{
    
    return (
        <SwapMenuNavBar collapseOnSelect expand="sm" variant="dark" sticky='top'>
            <Container>
                <SwapMenuNavBar.Brand href="#home"></SwapMenuNavBar.Brand>
                <SwapMenuInfoBarButton onClick={props.hide}>
                    <ProfileSVG style={{fill:"var(--bs-navbar-color)", width: "30px", height: "30px"}}/>
                </SwapMenuInfoBarButton>
                
                <SwapMenuNavBar.Toggle aria-controls="responsive-navbar-nav" />
                <SwapMenuNavBar.Collapse id="responsive-navbar-nav">
                    <SwapMenuNav className="me-auto">
                    <SwapMenuNav.Link href='/#home'>Home</SwapMenuNav.Link>
                    <SwapMenuNav.Link href="/#resume-section">Resume</SwapMenuNav.Link>
                    <SwapMenuNav.Link href="/#project-section">Projects</SwapMenuNav.Link>
                    <SwapMenuNav.Link href="/#contact">Contact</SwapMenuNav.Link>
                    <SwapMenuNav.Link href="#blog">Blog</SwapMenuNav.Link>    
                    <SwapMenuNav.Link href="/graphql">GraphQL</SwapMenuNav.Link>    
                    </SwapMenuNav>
                    <SwapMenuDropdown/>
                </SwapMenuNavBar.Collapse>
            </Container>
        </SwapMenuNavBar>
    )
}

export default SwapMenu