import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';


function FormInput({ onSubmit, onInputChange, sender, email, message }) {
    return (
        <div className={styles.inputParent}>
        <div className={styles.inputForm}>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="sender">Name:</label>
                <input 
                name="sender" 
                type="text" required
                value={sender}
                onChange={onInputChange}
                />
                <br/><br/>

                <label htmlFor="email">Email:</label>
                <input 
                name="email" 
                type="email" required
                value={email}
                onChange={onInputChange}
                />
                <br/><br/>

                <label htmlFor="message">Message:</label>
                <textarea 
                name="message" required
                value={message}
                onChange={onInputChange}
                ></textarea><br/><br/>
                
                <button>Submit</button>
                <div>
                    <p id="result-text"></p>
                </div>
            </form>
        </div>
        </div>
    )
}


FormInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    sender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,

}

export default FormInput;