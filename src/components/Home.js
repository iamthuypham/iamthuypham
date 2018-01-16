import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

// Components
import Main from './Main';
import Hero from './Hero';

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Grid container spacing={0}>
      <Grid item xs={12} sm={4}>
        <Hero />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Main />
      </Grid>
    </Grid>
  </div>
)}

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(Home);