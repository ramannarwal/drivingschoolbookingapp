import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from '../../Images/Review1.png';
import image2 from '../../Images/review2.png';
import image3 from '../../Images/review3.png';
import image4 from '../../Images/review4.png';
import image5 from '../../Images/review5.png';
import image6 from '../../Images/review6.png';
import image7 from '../../Images/review7.png';
import image8 from '../../Images/review8.png';
import image9 from '../../Images/review9.png';


const styles = {
  card: {
 
    height:400,
    marginBottom: 16,
    border:' 2px grey solid',
    borderRadius: '25px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
};

function Reviews(props) {
  const { classes } = props;
  var divStyle = {
    height: '80%',
    width: '60%',
   
  };
  
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image1} />
        </CardMedia>
      </Card>

      <Card className={classes.card}>
        <CardMedia>
            <img  style ={divStyle}  alt="yelp review"
            src={image3} />
        </CardMedia>
      </Card>

      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image2} />
        </CardMedia>
      </Card>

      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image5} />
        </CardMedia>
      </Card>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image9} />
        </CardMedia>
      </Card>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image7} />
        </CardMedia>
      </Card>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image6} />
        </CardMedia>
      </Card>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image8} />
        </CardMedia>
      </Card>
      <Card className={classes.card}>
        <CardMedia>
            <img style ={divStyle} alt="yelp review"
            src={image4} />
        </CardMedia>
      </Card>
    </div>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);
