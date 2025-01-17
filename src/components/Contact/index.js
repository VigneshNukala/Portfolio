
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Nav from '../Nav'
import Footer from '../Footer'

import {
    ContactDiv, 
    ContactHeading, 
    ContactPara, 
    ContactDescCon, 
    ContactDescHeading,
    ContactForm,
    Label,
    Input1,
    Input2,
    Button,
} from './styledComponents'

const Contact = (pros) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault();
        
        const serviceId = 'service_0o31jhh';
        const templateId = 'template_l9xoov6';
        const userId = 'z9LfVzx_GKjZMEQfH';
        const templetParams = {
            from_name: name,
            from_mail: email,
            from_phone: phone,
            from_message: message,
            to_name : 'Vignesh Nukala',
        }
        emailjs.send(serviceId,templateId,templetParams,userId)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('')
          setEmail('')
          setPhone('')
          setMessage('')
        })
        .catch((err) => {
          console.error('FAILED...', err);
        });
    };

    return (
        <>
            <Nav />
            <ContactDiv>
                <ContactHeading>CONTACT ME</ContactHeading>
                <ContactPara>SAY HELLO TO ME</ContactPara>
            </ContactDiv>
            <ContactDescCon>
                <ContactDescHeading>Contact Me</ContactDescHeading>
                <ContactForm onSubmit={handelSubmit}>
                    <Label>Name</Label>
                    <Input1 type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <Label>Email</Label>
                    <Input1 type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Label>Phone</Label>
                    <Input1 type="text" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <Label>Message</Label>
                    <Input2 type="textarea" placeholder='My name is...' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <Button type="submit">Send Message</Button>
                </ContactForm>
            </ContactDescCon>
            <Footer />
        </>
    )
}
export default Contact;