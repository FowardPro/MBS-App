import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomeVideo from './components/Landing_Page/WelcomeVideo';
import MiddelVideo from './components/MiddelVideo';
import UpcomingEvents from './components/UpcomingEvents';
import CreateAccount from './CreateAccount';
import Footer from './components/Footer';
import Registration from './components/Landing_Page/Registration';
import Longing from './components/Landing_Page/Longing';
import './App.css';

function App() {
  const signupRef = useRef(null);

  const scrollToSignUp = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <WelcomeVideo scrollToSignUp={scrollToSignUp} />
      <main>
        <div className='change_background1'>
          <h2>Welcome to MBS</h2>
          <p>Your platform for booking an apartment.</p>
        </div>
        <UpcomingEvents />
        <div className='change_background1'>
          <h2>South African Best property deal</h2>
          <p>Booking a house has never been this easy.</p>
        </div>
        <div ref={signupRef} className='change_background'>
          <h2>SignUp with MBS</h2>
          <p>Booking artists has never been this easy.</p>
        </div>

        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Longing" element={<Longing />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
