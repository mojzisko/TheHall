import React from 'react';
import './App.css';
import './resources/styles.css'
import Header from './components/header_footer/Header';
import Featured from './components/featured/MainPage';
import Info from './components/featured/venueNfo/Info';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{ height:"1500px"}}>

      
      <Header />
      

      <Element name="start">
          <Featured />
      </Element>

      <Element name="info">
          <Info />
      </Element>

       <Element name="highlights">
          <Highlights />
       </Element>

      <Element name="pricing">
          <Pricing />
      </Element>

      <Element name="location">
          <Location />
      </Element>

       <Footer />

    </div>
  );
}

export default App;
