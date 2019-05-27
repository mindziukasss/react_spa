import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet'

import Hedear from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App">
        <Helmet>
            <title>The Venue</title>
            <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
        </Helmet>
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
