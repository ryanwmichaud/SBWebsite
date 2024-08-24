import React, { useState } from 'react';

const GetInvolved = () => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        //validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        console.log('Email submitted:', email);
        setSubmitted(true);
        setError('');

    };

    return (
        <div className="get-involved">
            <p className='get-involved-title'>GET INVOLVED </p>
        
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className='form-field'>
                        <label className="field-label" htmlFor="firstname">First Name:</label>
                        <input
                            className="field-input"
                            type='text'
                            id="signup-firstname"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                    </div>
                    <div className='form-field'>
                        <label className="field-label" htmlFor="lastname">Last Name:</label>
                        <input
                            className="field-input"
                            type="lastname"
                            id="signup-lastname"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className='form-field'>
                        <label className="field-label" htmlFor="email">Email:</label>
                        <input
                            className="field-input"
                            type="email"
                            id="signup-email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <button className="get-involved-submit" type="submit">Sign Up</button>

                </div>
                {error && <p className="error">{error}</p>}

                
            </form>
            <div className='email-message'> {submitted ?  "Thank you for signing up" : error ? "error" : "" } </div>
            
            
            
        </div>
    );
};

export default GetInvolved;