import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Longing from './Longing'; // Ensure the correct import of the Login component

const Registration = () => {
    const [showLogin, setShowLogin] = useState(false); // State to toggle between Registration and Login
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirmPassword
    const [firstName, setFirstName] = useState(''); // State for firstName
    const [lastName, setLastName] = useState(''); // State for lastName
    const [kinName, setKinName] = useState(''); // State for Next of Kin's Name
    const [kinRelationship, setKinRelationship] = useState(''); // State for Next of Kin's Relationship
    const [kinContact, setKinContact] = useState(''); // State for Next of Kin's Contact Number

    // This function toggles to the login view
    const handleLoginClick = () => {
        setShowLogin(true); // Show the Login component when the link is clicked
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    kin_name: kinName,
                    kin_relationship: kinRelationship,
                    kin_contact: kinContact,
                }),
            });

            if (response.ok) {
                alert('Registration successful! Please check your email for further instructions.');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    if (showLogin) {
        return <Longing />; // If showLogin is true, render the Login component
    }

    return (
        <div className='background_change'>
            <div className="registration-wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            <div className="text"></div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>Register to join us</header>
                                <form onSubmit={handleSignUp}>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="firstname"
                                            required
                                            autoComplete="off"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <label htmlFor="firstname">First Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="lastName"
                                            required
                                            autoComplete="off"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            className="input"
                                            id="pass"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="pass">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            className="input"
                                            id="confirmPassword"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="kinName"
                                            required
                                            autoComplete="off"
                                            value={kinName}
                                            onChange={(e) => setKinName(e.target.value)}
                                        />
                                        <label htmlFor="kinName">Next of Kin Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="kinRelationship"
                                            required
                                            autoComplete="off"
                                            value={kinRelationship}
                                            onChange={(e) => setKinRelationship(e.target.value)}
                                        />
                                        <label htmlFor="kinRelationship">Next of Kin Relationship</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="kinContact"
                                            required
                                            autoComplete="off"
                                            value={kinContact}
                                            onChange={(e) => setKinContact(e.target.value)}
                                        />
                                        <label htmlFor="kinContact">Next of Kin Contact Number</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <div className="signin">
                                    <span>Already have an account? <a href="#" onClick={handleLoginClick}>Log in here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
