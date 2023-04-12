import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () =>{
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark-blue" variant="dark" style={{height: '50px'}}>
            <Container>
            <small style={{color: '#8c8c8e'}}>2023 Oscar's Hub</small>
            <small style={{color: '#8c8c8e'}}>Build by Oscar Delgado</small>           
            </Container>
        </Navbar>
    )

}

export default Footer