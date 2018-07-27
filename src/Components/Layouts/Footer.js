import React, { Fragment } from 'react';
import phoneImage from '../../Images/phone.png';
import facebookIcon from '../../Images/facebook.png';
import yelpIcon from '../../Images/yelp.png';
import locationImage from '../../Images/servingLocation.png';
import image from '../../Images/background.jpg';

const Footer =() =>{
    var divStyle = {

        backgroundImage: "url(" + image + ")",
     
        backgroundColor:'#4d4dff',
         width:'100%', 
         display: 'inline-block',
          position: 'absolute',
          marginTop: '5px',
      };
return(
    <Fragment  >
        <div style = {divStyle} > 
            <div style= {{display:'inline-block', float:'left', marginLeft: '3%'}}>
                <h3 style ={{color: 'white' }}>Serving Locations:<span style ={{fontSize:'0.9em'}}> Santa Clara and surrounding area</span></h3>
                <img style={{height: '180px', width: '360px', border: ' 1.5px solid black'}} alt="servingLocationMap" src={locationImage}/>
            </div>
            <div style= {{display:'inline-block', float:'left', marginLeft: '10%'}}>        
                <p style ={{ color: 'white', fontSize: '2em', textAlign:'center'}}>Contact us:</p>
                <p style ={{ color: 'white', fontSize: '1.3em', textAlign:'center'}}>vittydrivinginstructor@gmail.com</p>
                <p style ={{ color: 'white', fontSize: '1.3em', textAlign:'center'}}>669-264-3086</p>
                    <a  href="tel:6692643086"><img src={phoneImage} alt="phoneLogo" width="50px" height="50px"/></a>
                    <a style= {{paddingLeft: '65px'}} target = '_blank' rel="noopener noreferrer"   href="https://www.facebook.com/vittydrivingclasses/"><img src={facebookIcon} alt="facebookLogo" width="50px" height="50px" /></a>
                    <a  style= {{paddingLeft: '65px'}} target = '_blank' rel="noopener noreferrer"  href="https://www.yelp.com/biz/vitty-driving-training-classes-santa-clara-3"><img src={yelpIcon} alt="yelpLogo" width="50px" height="50px"/></a>
            </div>
            <div style = {{display:'inline-block',  float:'left', marginLeft: '10%', paddingTop:'30px'}}>
                <table style={{color:'white'}}>
                    <tr>
                        <th style={{fontSize: '1.2em', paddingBottom:'20px', textAlign: 'left'}}>
                            Business Hours
                        </th>
                    </tr>
                    <tr><td> Monday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Tuesday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Wednesday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Thursday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Friday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Saturday: 8:00AM - 8:00PM</td></tr>
                    <tr><td> Sunday: 8:00AM - 8:00PM</td></tr>                   
                </table> 
            </div>
        </div>
    </Fragment>
)
}

export default Footer;