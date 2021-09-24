import React, { useState } from 'react';
// import FormInput from '../presentation/FormInput';

const ContactForm = () => {

    const [sender, setSender] = useState();
    const [email, setEmail] = useState();
    const [body, setBody] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Name:', sender)
        console.log('Email:', email)
        console.log('Message:', body)
        // lambda will go here?
    }

    return (
        <>
       return (
        <div>
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

                <input
                name="submitButton"
                type="submit"
                value="Send" />
                <div>
                    <p id="result-text"></p>
                </div>
            </form>
        </div>
    )
        </>
    );
};

export default ContactForm;