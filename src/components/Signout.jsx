import React from 'react';
import { auth } from './utils/firebase'; // Import the Firebase auth instance
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signout.css'; // Import your CSS file for styling

function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Logged out');
      navigate('/');
    } catch (error) {
      console.error('Signout error:', error.message);
    }
  };

  return (
    <div className="signout-container">
      <h1>You have successfully logged in to the account</h1>
      <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;
