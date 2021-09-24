import React from 'react';
import PropTypes from 'prop-types';


function FormInput({ onSubmit, onInputChange, sender, email, body }) {
    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="sender">Name:</label>
                <input 
                name="sender" 
                type="text" 
                value={sender}
                onChange={onInputChange}
                />
                <br/><br/>

                <label htmlFor="email">Email:</label>
                <input 
                name="email" 
                type="email" 
                value={email}
                onChange={onInputChange}
                />
                <br/><br/>

                <label htmlFor="body">Message:</label>
                <textarea 
                name="body" 
                value={body}
                onChange={onInputChange}
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
    onInputChange: PropTypes.func.isRequired,
    sender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,

}

export default FormInput;