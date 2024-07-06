import React from 'react';
import Navbar from "../components/Navbar";
import Homeui from "../components/Homeui";
import Homecards from "../components/Homecards";
import Homemarquee from '../components/Homemarquee';
import Hdecards from "../components/Hdecards";
import Homedesign from '../components/Homedesign';
import Hometestimonial from '../components/Hometestimonial';
import Footer from '../components/Footer';


const Homepages = () => {
  return (
    <div>
      <Navbar/>
      <Homeui/>
      <Homecards/>
      <Homemarquee/>
      <Hdecards images="food_14.jpg" name="litti choka"/>
      <Hdecards images="food_13.jpg" name="litti choka"/>
      <Hdecards images="food_12.jpg" name="litti choka"/>
      <Hdecards images="food_11.jpg" name="litti choka"/>
      <Hdecards images="food_10.jpg" name="litti choka"/>
      <Hdecards images="food_9.jpg" name="litti choka"/>
      <Homedesign/>
      <Hometestimonial/>
      <Footer usercolor={"rgba(130, 8, 244, 0.965)"}/>

    </div>
  )
}

export default Homepages
