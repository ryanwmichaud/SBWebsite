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
            <p>Get involved </p>
        
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className='form-field'>
                        <label htmlFor="firstname">firstname:</label>
                        <input
                            type='text'
                            id="signup-firstname"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                        />
                    </div>
                    <div className='form-field'>
                        <label htmlFor="lastname">lastname:</label>
                        <input
                            type="lastname"
                            id="signup-lastname"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className='form-field'>
                        <label htmlFor="email">email:</label>
                        <input
                            type="email"
                            id="signup-email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign Up</button>
                    
                </div>
                
            </form>
            <div className='email-message'> {submitted ?  "Thank you for signing up" : error ? "error" : "" } </div>
            
            
            
        </div>
    );
};

export default GetInvolved;