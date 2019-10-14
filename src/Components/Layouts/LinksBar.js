import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { BookingForm, Reviews, Price,Home, Aboutus} from '../Content';


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, height: '80vh' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({

});

class LinksBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme } = this.props;
   

    return (
      <div >
        <AppBar position="sticky" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="default"
              centered
            >
              <Tab label="Home"/>
              <Tab label="Pricing" />
              <Tab label="Success Stories" />
              <Tab label="Testimonials" />
              <Tab label="About US" />
            </Tabs>
          
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}><Home/></TabContainer>
            <TabContainer dir={theme.direction}><Price/></TabContainer>
            <TabContainer dir={theme.direction}><BookingForm/></TabContainer>
            <TabContainer dir={theme.direction}><Reviews/></TabContainer>
            <TabContainer dir={theme.direction}><Aboutus/></TabContainer>
        </SwipeableViews>
          
      </div>
    );
  }
}

LinksBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LinksBar);





