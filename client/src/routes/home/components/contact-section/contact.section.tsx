import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import ReCAPTCHA from "react-google-recaptcha"

import { postAPI } from '../../../../utils/backend/api';

const defaultFormFields = {
    name: '',
    email: '',
    message: '',
    token: ''
}

function ContactSession() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [submitStatus, setSubmitStatus] = useState("none")
    const { name, email, message } = formFields;
    const captchaRef = useRef<ReCAPTCHA>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
        setSubmitStatus("loading")
        try{
            if (captchaRef && captchaRef.current){
                const res = await postAPI("/mail/getintouch", formFields)
                clearFormFields();
                captchaRef.current.reset();
                setSubmitStatus("true")
            }
            else{
                window.alert("ReCaptcha is Required")
            }            
        }
        catch(err){
            console.log(err)
            setSubmitStatus("false")
        }
    }

    const submitFeedback = () => {
        if (submitStatus == "false"){
            return(
                <button className='flex justify-center items-center bg-[rgb(26,17,65)] hover:bg-[rgb(87,69,167)] w-3/6 text-white px-3 py-2 rounded-md h-16' type='submit'>
                    <span style={{color:"red", fontWeight:"900"}}>  &#10008; </span>
                </button>
            )
        }
        else if(submitStatus == "true"){
            return(
            <button className='flex justify-center items-center bg-[rgb(26,17,65)] hover:bg-[rgb(87,69,167)] w-3/6 text-white px-3 py-2 rounded-md h-16' disabled>
                <span style={{color:"green", fontWeight:"900"}}>  &#10004; </span>
            </button>
        )
        }
        else if(submitStatus == "loading"){
            return(
                <button className='flex justify-center items-center bg-[rgb(26,17,65)] hover:bg-[rgb(87,69,167)] w-3/6 text-white px-3 py-2 rounded-md h-16' disabled>
                    <span className='animate-bounce'>Loading . . . .</span>
                </button>
            )
        }
        return(
            <button className='flex justify-center items-center bg-[rgb(26,17,65)] hover:bg-[rgb(87,69,167)] w-3/6 text-white px-3 py-2 rounded-md h-16'>
                Submit
            </button>
        )
    }

  return (
    <section className='pt-' id="contact">
        <h1 style={{"textAlign":"center"}}>Contact <strong>Me</strong></h1>
        <div className='pt-10'>
            <h4>Get in touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="form-name" className="block text-sm font-medium text-[wheat]">Name</label>
                    <input 
                    type="text" 
                    id="form-name" 
                    name="name" 
                    placeholder="Name" 
                    onChange={handleChange} 
                    value={name} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="form-email" className="block text-sm font-medium text-[wheat]">Email address</label>
                    <input 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    placeholder="Enter email" 
                    onChange={handleChange} 
                    value={email} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="form-message" className="block text-sm font-medium text-[wheat]">Message</label>
                    <textarea 
                    id="form-message" 
                    name="message" 
                    rows={10} 
                    placeholder="Enter message" 
                    onChange={handleChange} 
                    value={message} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    />
                </div>

                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY as string} theme='light' ref={captchaRef} onChange={verify}/>

                <br/>

                {submitFeedback()}

            </form>
        </div>
    </section>
  );
}

export default ContactSession;