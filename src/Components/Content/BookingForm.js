import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from '../../Images/1.jpg';
import image2 from '../../Images/2.jpg';
import image3 from '../../Images/3.jpg';
import image4 from '../../Images/4.jpg';
import image5 from '../../Images/99.jpg';
import image6 from '../../Images/6.jpg';
import image7 from '../../Images/7.jpg';
import image8 from '../../Images/8.jpg';
import image9 from '../../Images/10.jpg';
import image10 from '../../Images/12.jpg';
import image11 from '../../Images/55.jpg';



const styles = {
  card: {
 
    height:'50%',
    width: '50%',
    marginBottom: 6,
    border:' 2px grey solid',
    borderRadius: '25px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
 
 
};

function Reviews(props) {
  const { classes } = props;
  var divStyle = {
    height: '100%',
    width: '100%', 
  };
  
  var imageList = [image1, image3, image2, image5, image4, image6, image7, image8, image9, image10,image11];

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
