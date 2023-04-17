import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ContactContainer, ContactRow } from './contact.styles';
import Col from 'react-bootstrap/Col';

function ContactSession() {
    const httpGetInTouch = async () => {
        try{
            await fetch('https://oscarshub.com/api/v1/mail/getintouch')
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <ContactContainer>
        <h1 style={{"textAlign":"center"}}>Contact <strong>Me</strong></h1>
        <ContactRow>
            <Col >
                <h4>Get in touch</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="form-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-message" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder="Enter message" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
                {/* <Col lg={6}>
                    <h4>Contact Info</h4>
                    <ul>
                        <li>
                            <h6>Email:</h6>
                            <span>oscardel413@gmail.com</span>
                        </li>
                        <li>
                            <h6>Phone:</h6>
                            <span>+1 720 219 5293</span>
                        </li>
                    </ul>
                </Col> */}
        </ContactRow>
    </ContactContainer>
  );
}

export default ContactSession;