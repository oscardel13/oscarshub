import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ReactComponent as ProfileSVG } from '../../assets/profile.svg';

import './swap-menu.styles.css'

const SwapMenu = (props: {hide: ()=>void}) =>{
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark-blue" variant="dark" sticky='top'>
            <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <a onClick={props.hide} id="mobileHide">
                <ProfileSVG style={{fill:"var(--bs-navbar-color)", width: "30px", height: "30px"}}/>
            </a>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href="#resume-section">Resume</Nav.Link>
                <Nav.Link href="#project-section">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="http://nasaproject.oscarshub.com/">Nasa Project</Nav.Link>
                <Nav.Link eventKey={2} href="https://crwnclothing.oscarshub.com/">
                    Crwn Clothing
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default SwapMenu