import React, {Component} from 'react';
import "./resources/styles.css";

import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';
import VenueNfo from './components/venueNFO/Index';
import Highlights from './components/highlights/Index';
import Pricing from './components/pricing/Index'





class App extends Component{
render() {
  return (
    <div className="App" style={{height:'1500px',background:'white'}}>
  
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
      <Pricing/>

  
    </div>
  );
}

}

export default App;


