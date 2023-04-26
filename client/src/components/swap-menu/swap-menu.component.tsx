import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NasaProjectPicture from '../../assets/nasa.png'
import CrwnClothingPicture from '../../assets/crwn-192x192.png'
import EmpowerCaninePicture from '../../assets/empowercanine.png'
import { ReactComponent as ProfileSVG } from '../../assets/profile.svg';

import { 
    SwapMenuCard,
    SwapMenuDropdown,
    SwapMenuCardBody,
    SwapMenuCardImg,
    SwapMenuRow,
    SwapMenuNav,
    SwapMenuNavBar,
    SwapMenuInfoBarButton
 } from './swap-menu.styles';


const SwapMenu = (props: {hide: ()=>void}) =>{
    const newTab = (url: string) => {
        window.open(url, "_blank")
    }
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
                <SwapMenuNav.Link href='#home'>Home</SwapMenuNav.Link>
                <SwapMenuNav.Link href="#resume-section">Resume</SwapMenuNav.Link>
                <SwapMenuNav.Link href="#project-section">Projects</SwapMenuNav.Link>
                <SwapMenuNav.Link href="#contact">Contact</SwapMenuNav.Link>
                <SwapMenuNav.Link href="#blog">Blog</SwapMenuNav.Link>
                
                </SwapMenuNav>
                <SwapMenuDropdown title="Other Sites" id="basic-nav-dropdown">
                    <SwapMenuDropdown.Item onClick={()=>{newTab("http://nasaproject.oscarshub.com/")}}>
                        <SwapMenuCard>
                            <SwapMenuRow>
                                <Col xs={5}>
                                    <SwapMenuCardImg src={NasaProjectPicture} />
                                </Col>
                                <Col xs={7}>
                                    <SwapMenuCardBody>
                                        <h6>Nasa Project</h6>
                                    </SwapMenuCardBody>
                                </Col>
                            </SwapMenuRow>
                        </SwapMenuCard>
                    </SwapMenuDropdown.Item>
                    <SwapMenuDropdown.Divider />
                    <SwapMenuDropdown.Item onClick={()=>newTab("http://crwnclothing.oscarshub.com/")}>
                        <SwapMenuCard>
                            <SwapMenuRow>
                                <Col xs={5}>
                                    <SwapMenuCardImg src={CrwnClothingPicture} />
                                </Col>
                                <Col xs={7}>
                                    <SwapMenuCardBody>
                                        <h6>Crwn Clothing</h6>
                                    </SwapMenuCardBody>
                                </Col>
                            </SwapMenuRow>
                        </SwapMenuCard>
                    </SwapMenuDropdown.Item>
                    <SwapMenuDropdown.Divider />
                    <SwapMenuDropdown.Item onClick={()=>newTab("https://empowercanine.com/")}>
                        <SwapMenuCard>
                            <SwapMenuRow>
                                <Col xs={5}>
                                    <SwapMenuCard.Img src={EmpowerCaninePicture} />
                                </Col>
                                <Col xs={7}>
                                    <SwapMenuCardBody>
                                        <h6>Empower Canine</h6>
                                    </SwapMenuCardBody>
                                </Col>
                            </SwapMenuRow>
                        </SwapMenuCard>
                    </SwapMenuDropdown.Item>
                </SwapMenuDropdown>
            </SwapMenuNavBar.Collapse>
            </Container>
        </SwapMenuNavBar>
    )

}

export default SwapMenu