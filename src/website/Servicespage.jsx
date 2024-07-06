import React from 'react';
import Navbar from '../components/Navbar';
import Serviceshome from '../components/Serviceshome';
import Servicescards from '../components/Servicescards';
import Footer from "../components/Footer"

const Servicespage = () => {
  return (
    <div>
        <Navbar/>
        <Serviceshome/>
        <Servicescards/>
        <Footer usercolor={"rgba(24, 24, 24, 0.986)"}/>
      
    </div>
  )
}

export default Servicespage
