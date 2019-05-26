import React from 'react';
import './resources/styles.css';

import Hedear from './components/header_footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue_info/VenueInfo'


function App() {
  return (
    <div className="App" style={{height:"1500px" , backgroundColor: 'red'}}>
        <Hedear/>
        <Featured/>
        <VenueInfo/>
    </div>
  );
}

export default App;
