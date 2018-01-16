import React from 'react';
import { withStyles } from 'material-ui/styles';
import breakpoints from '../theme/breakpoints';

// Component
import me from '../img/thuy.jpg';

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.imgWrapper}>
        <img src={me} className={classes.img}/>
      </div>
      <div className={classes.tint}></div>
    </div>
)}

const styles = theme => ({
  imgWrapper: {
    height: '37vh',
    [`@media (min-width: ${breakpoints['sm']}px)`]:{
      height: '100vh',
    },
    overflow: 'hidden'
  },
  img: {
    filter: 'grayscale(100%)',
    width: '100%',
    [`@media (min-width: ${breakpoints['sm']}px) and (max-width: ${breakpoints['lg']}px)`]:{
      height: '100%',
      width: 'auto',
      // marginLeft: 'calc(-3*100%/12)'
    }
  },
  tint: {
    zIndex: 1,
    height: '37vh',
    [`@media (min-width: ${breakpoints['sm']}px)`]:{
      height: '100%',
      width: 'calc(4*100%/12)',
    },
    width: '100%',
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    '&::before':{
      backgroundColor: 'rgba(180, 0, 78, 0.2)',
      content: "\'\'",
      display: 'block',
      width: '100%',
      height: '100%',
      mixBlendMode: 'darken',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }
})

export default withStyles(styles)(Hero);