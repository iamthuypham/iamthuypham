import React from 'react';
import { withStyles } from 'material-ui/styles';
import breakpoints from '../theme/breakpoints';

// Swipeable Library
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from '../utils/Pagination';
import SupportTouch from '../utils/SupportTouch';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// Data
import projects from './ProjectData';

class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  
    this.handleChangeIndex = (index) => {
      this.setState({
        index,
      })
    }
  }
  render() {
  const { index } = this.state
  const { classes, projectId } = this.props
  let imgList = projects.filter((project) => project.id === projectId)[0].img
  return (
    <SupportTouch>
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          { imgList && imgList.map((img) => 
            ( 
            <div key={img} style={Object.assign({}, styles.slide, styles.slide1)}>
              <img src={require(`../img/${img}.jpg`)} className={classes.img}/>
            </div>
            )  
          )}
        </AutoPlaySwipeableViews>
        <Pagination dots={projects.length} index={index} onChangeIndex={this.handleChangeIndex} />
      </div>
    </SupportTouch>
  )}
}

const styles = theme => ({
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  img: {
    height: '100%'
  }
})

export default withStyles(styles)(Swiper);