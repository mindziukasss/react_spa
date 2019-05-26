import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Hedear from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App" style={{height:"1500px" , background: 'cornflower'}}>
        <Hedear/>
        <Element name={"featured"}>
            <Featured/>
        </Element>
        <Element name={"venueinfo"}>
            <VenueInfo/>
        </Element>
        <Element name={"highlights"}>
            <Highlights/>
        </Element>
        <Element name={"pricing"}>
            <Pricing/>
        </Element>
        <Element name={"location"}>
            <Location/>
        </Element>
        <Footer/>
    </div>
  );
}

export default App;
