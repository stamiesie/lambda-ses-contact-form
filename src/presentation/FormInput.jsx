import React from 'react';
import PropTypes from 'prop-types';


function FormInput({ onSubmit, onChange, sender, email, body }) {
    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="sender">Name:</label>
                <input 
                name="sender" 
                type="text" 
                value={sender}
                onChange={onChange}
                noValidate/>
                <br/><br/>

                <label htmlFor="email">Email:</label>
                <input 
                name="email" 
                type="email" 
                value={email}
                onChange={onChange}
                noValidate/>
                <br/><br/>

                <label htmlFor="body">Message:</label>
                <textarea 
                name="body" 
                value={body}
                onChange={onChange}
                noValidate
                ></textarea><br/><br/>

                <button>Submit</button>
                <div>
                    <p id="result-text"></p>
                </div>
            </form>
        </div>
    )
}


FormInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    sender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,

}

export default FormInput;