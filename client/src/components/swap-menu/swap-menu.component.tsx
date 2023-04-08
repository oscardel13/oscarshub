import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './swap-menu.styles.css'

const SwapMenu = (props: {hide: ()=>void}) =>{
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark-blue" variant="dark" sticky='top'>
            <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <a onClick={props.hide} id="mobileHide">
                <i className="fas fa-ellipsis-h" style={{'fontSize':'26px'}}></i>
            </a>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href="#portfolio">Resume</Nav.Link>
                <Nav.Link href="#history">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="http://nasaproject.oscarswork.com/">Nasa Project</Nav.Link>
                <Nav.Link eventKey={2} href="https://crwnclothing.oscarswork.com/">
                    Crwn Clothing
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default SwapMenu