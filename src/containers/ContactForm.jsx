import React, { useState } from 'react';
import FormInput from '../components/presentation/FormInput';
import { sendEmail } from '../service/Lambda';

const ContactForm = () => {
    const [state, setState] = useState({
        sender: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
             [e.target.name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('Name:', state.sender)
        console.log('Email:', state.email)
        console.log('Message:', state.message)
        await sendEmail(state.sender, state.email, state.message);
    }

    return (
        <>
            <FormInput
            onSubmit={handleFormSubmit}
            onInputChange={handleChange}
            sender={state.sender}
            email={state.email}
            message={state.message}
            />
        </>
    );
};

export default ContactForm;