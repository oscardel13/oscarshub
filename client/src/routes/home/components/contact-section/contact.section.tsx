import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import ReCAPTCHA from "react-google-recaptcha"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ContactContainer, ContactRow } from './contact.styles';
import Col from 'react-bootstrap/Col';

import { postAPI } from '../../../../utils/backend/api';

const defaultFormFields = {
    name: '',
    email: '',
    message: '',
    token: ''
}

function ContactSession() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const captchaRef = useRef<ReCAPTCHA>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        
        setFormFields({...formFields,[name]:value})
    }

    const clearFormFields = () =>{
        setFormFields(defaultFormFields)
    }

    const verify = () =>{
            if (captchaRef && captchaRef.current){
                let token = captchaRef.current.getValue()
                if (token!="" && token != null)
                    setFormFields({...formFields, token})
        }
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            if (captchaRef && captchaRef.current){
                const res = await postAPI("/mail/getintouch", formFields)
                console.log(res)
                clearFormFields()
                captchaRef.current.reset();
            }
            else{
                window.alert("ReCaptcha is Required")
            }            
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <ContactContainer>
        <h1 style={{"textAlign":"center"}}>Contact <strong>Me</strong></h1>
        <ContactRow id="contact">
            <Col >
                <h4>Get in touch</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="form-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name='name' onChange={handleChange} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-message" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder="Enter message" name='message' onChange={handleChange} required/>
                    </Form.Group>

                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY as string} theme='light' ref={captchaRef} onChange={verify}/>

                    <br/>
                    
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
                </Col>
        </ContactRow>
    </ContactContainer>
  );
}

export default ContactSession;