import React from 'react';
import {AppBar,Toolbar} from '@material-ui/core/';
import phoneImage from '../../Images/callnow.png';
import image from '../../Images/background.jpg';
import logo from '../../Images/logo.gif';

const TitleBar =() =>{
    var divStyle = {
        height: "100%",
        backgroundImage: "url(" + image + ")",
        webkitBackgroundSize: 'cover',
      };

      var style = {
        display: 'inline-block',
       
      }
return(
 
    <AppBar position="sticky" style = {divStyle}>
        <Toolbar > 
            <div style = {style}>  
                <img src={logo} alt="Smiley face"   style = {{height:"75px", margin: '40px 0 0 10px', border: '2px solid grey', borderRadius: '15px',float: 'left'}}/>       
                <p style = {{color:'white', marginLeft: '40px', marginBottom: '35px', fontSize:'3.5em', fontFamily:'fantasy,cursive',float: 'left'}}>Vitty Driving Training Classes</p>
                <a  style = {{float: 'left', margin: '60px 0 0 200px'}} href="tel:6692643086"><img src={phoneImage} alt = "phoneImage" width="130px" height="80px"/></a>
            </div>
        </Toolbar>       
    </AppBar>
    )
}

export default TitleBar;