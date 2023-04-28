import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import ReCAPTCHA from "react-google-recaptcha"

import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ContactContainer, ContactRow } from './contact.styles';
import Col from 'react-bootstrap/Col';

import { postAPI } from '../../../../utils/backend/api';

const defaultFormFields = {
    name: '',
    email: '',
    message: '',
    token: '',
    success: 'none'
}

function ContactSession() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, message, success } = formFields;
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
        setFormFields({...formFields, success:"loading"})
        try{
            if (captchaRef && captchaRef.current){
                const res = await postAPI("/mail/getintouch", formFields)
                clearFormFields();
                captchaRef.current.reset();
                setFormFields({...formFields, success:"true"})
            }
            else{
                window.alert("ReCaptcha is Required")
            }            
        }
        catch(err){
            console.log(err)
            setFormFields({...formFields, success:"false"})
        }
    }

    const submitFeedback = () => {
        if (success == "false"){
            return(
                <Button variant="primary" type="submit">
                    <span style={{color:"red", fontWeight:"900"}}>  &#10008; </span>
                </Button>
            )
        }
        else if(success == "true"){
            return(
            <Button variant="primary" type="submit" disabled>
                <span style={{color:"green", fontWeight:"900"}}>  &#10004; </span>
            </Button>
        )
        }
        else if(success == "loading"){
            return(
                <Button variant="primary" type="submit" disabled>
                    <Spinner animation="border" />
                </Button>
            )
        }
        return(
            <Button variant="primary" type="submit">
                Submit
            </Button>
        )
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
                        <Form.Control type="text" placeholder="Name" name='name' onChange={handleChange} value={name} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} value={email} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="form-message" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder="Enter message" name='message' onChange={handleChange} value={message} required/>
                    </Form.Group>

                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY as string} theme='light' ref={captchaRef} onChange={verify}/>

                    <br/>
                    
                    {submitFeedback()}
                    
                    
                </Form>
                </Col>
        </ContactRow>
    </ContactContainer>
  );
}

export default ContactSession;