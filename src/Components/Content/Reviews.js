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

  var imageList = [image1, image3, image2, image5, image4, image6, image7, image8, image9];

  var images = imageList.map((image) => 
      <Card className={classes.card}>
            <CardMedia>
              <img style ={divStyle} alt="yelp review"
              src={image} />
          </CardMedia>
      </Card>);

  return (
    <div>
     {images}
    </div>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);
