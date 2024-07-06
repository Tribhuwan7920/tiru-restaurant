import React from 'react';
import Navbar from '../components/Navbar';
import Contacthome from '../components/Contacthome';
import Contactform from '../components/Contactform';
import Footer from "../components/Footer"

const Contactpage = () => {
  return (
    <div>
      <Navbar/>
      <Contacthome/>
      <Contactform/>
      <Footer  usercolor={"rgba(24, 24, 24, 0.986)"}/>
    </div>
  )
}

export default Contactpage
