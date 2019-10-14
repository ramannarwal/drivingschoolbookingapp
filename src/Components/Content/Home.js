import React from 'react';
import image from '../../Images/homePage.jpg';

class Home extends React.Component {
    render(){
        var divStyle = {
            height: "100%",
            width: '100%',
            backgroundImage: "url(" + image + ")",
            webkitBackgroundSize: 'cover',
            marginBottom: '10px',
          }; 
          
          
          
        return (
        <div style={divStyle} >
            <p style= {{textAlign: 'center', color: 'white', fontSize: '4.2em',  fontFamily: 'Times New Roman', paddingTop: '150px'}}> Got License? </p>
            <p style= {{textAlign: 'center', color: 'white', fontSize: '2em', paddingTop: '10px', fontFamily: 'Times New Roman'}}> Driving license is the most vital thing in your wallet</p>
            <p style= {{textAlign: 'center', color: 'white', fontSize: '2em', paddingTop: '10px', fontFamily: 'Times New Roman'}}> Let us help you get one!</p>
        </div>
        )
    }

}

export default Home;