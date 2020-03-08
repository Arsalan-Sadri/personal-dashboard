import React from 'react';
import Navbar from '../components/Navbar.js';
import SignupForm from '../components/SignupForm.js';
import Footer from '../components/Footer.js';

function SignupPage() {
  return (
    <React.Fragment>
      <Navbar />
      <SignupForm />
      <Footer />
    </React.Fragment>
  );
}

export default SignupPage;
