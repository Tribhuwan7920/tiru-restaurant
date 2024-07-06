import React from 'react';
import Navbar from '../components/Navbar';
import Abouthome from '../components/Abouthome';
import Aboutcont from '../components/Aboutcont';
import Aboutgcu from '../components/Aboutgcu';
import Aboutmap from '../components/Aboutmap';
import Footer from '../components/Footer';


const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
      <Abouthome/>
      <Aboutcont/>
      <Aboutgcu/>
      <Aboutmap/>
      <Footer usercolor={"rgba(24, 24, 24, 0.986)"}/>
    </div>
  )
}

export default Aboutpage
