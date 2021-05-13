import React, { Component } from 'react';
import './Appsass.scss';
import Navbar from './components/Navbar';
import FetchWeather from './components/fetchWeather';
import Footer from './components/Footer';

// class components
class App extends Component{
   render(){
     return (
       <div className="container">
          <Navbar />
          <FetchWeather />
          <Footer />
        </div>
     )
   }
}

export  {App};
