import React, { Component } from 'react';
import './Appsass.scss';
import Navbar from './components/Navbar';
import FetchWeather from './components/fetchWeather';

class App extends Component{
   render(){
     return (
       <div className="container">
          <Navbar />
          <FetchWeather />
        </div>
     )
   }
}

export  {App};
