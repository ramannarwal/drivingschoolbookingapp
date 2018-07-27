import React from 'react';
import {TitleBar,LinksBar,Footer} from './Components/Layouts';
import './App.css';
import image from './Images/white.jpg';

const App= ()=> { 
  var divStyle = {
    height: "100%",
    backgroundImage: "url(" + image + ")",
    webkitBackgroundSize: 'cover',
  };
    return (
      <div style = {divStyle}>
         <TitleBar />
         <LinksBar/>
         <Footer/>
      </div>
    );
  
}

export default App;
