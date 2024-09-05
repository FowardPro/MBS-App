import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import image from '../../assets/photos/house3.jpg';
import { useNavigate } from 'react-router-dom';
import Registering from './Registration';

const Longing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(''); // State for modal message

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                navigate('/organizeraccountdesktop');
            } else {
                const errorMessage = await response.text();
                setModalMessage(errorMessage);
                setShowModal(true);
            }
        } catch (error) {
            setModalMessage('An error occurred. Please try again.');
            setShowModal(true);
        }
    };

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleCloseModal = () => setShowModal(false);

    if (isSignUp) {
        return <Registering />;
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up Email:', email);
        console.log('Sign Up Password:', password);

        // After successful sign-up, navigate to the OrganizerAccountDesktop page
        navigate('/organizeraccountdesktop');
    };

    return (
        <div className='background_change'>
            <div className="registration-wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            <img className='ztmlogo' src={image} alt="Side" />
                            <div className="text">
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>{isSignUp ? 'Sign Up' : 'Log In'}</header>
                                <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
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
                                        <input type="submit" className="submit" value={isSignUp ? 'Sign Up' : 'Log In'} />
                                    </div>
                                </form>
                                <div className="signin">
                                    {isSignUp ? (
                                        <span>Already have an account? <a href="#" onClick={() => setIsSignUp(false)}>Log In here</a></span>
                                    ) : (
                                        <span>Do not have an account? <a href="#" onClick={handleSignUpClick}>Sign Up here</a></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Invalid Credentials */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalMessage === 'Login successful' ? 'Success' : 'Invalid Login'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Longing;
