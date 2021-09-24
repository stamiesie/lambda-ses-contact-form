import React, { useState } from 'react';
import FormInput from '../components/presentation/FormInput';

const ContactForm = () => {

    // const [sender, setSender] = useState();
    // const [email, setEmail] = useState();
    // const [body, setBody] = useState();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('Name:', sender)
    //     console.log('Email:', email)
    //     console.log('Message:', body)
    // }

    const [state, setState] = useState({
        sender: '',
        email: '',
        body: ''
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
        console.log('Message:', state.body)
        // lambda here?
    }

    return (
        <>
        {/* <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sender">Name:</label>
                <input 
                name="sender" 
                type="text" 
                value={sender}
                onChange={e => setSender(e.target.value)}
                />
                <br/><br/>

                <label htmlFor="email">Email:</label>
                <input 
                name="email" 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <br/><br/>

                <label htmlFor="body">Message:</label>
                <textarea 
                name="body" 
                value={body}
                onChange={e => setBody(e.target.value)}
                ></textarea><br/><br/>

                <button>Submit</button>
                <div>
                    <p id="result-text"></p>
                </div>
            </form>
        </div> */}

            <FormInput
            onSubmit={handleFormSubmit}
            onInputChange={handleChange}
            sender={state.sender}
            email={state.email}
            body={state.body}
            />
        </>
    );
};

export default ContactForm;