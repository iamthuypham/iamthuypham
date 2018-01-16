import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from './Icon';

function Connection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <a className={classes.connection} href='https://github.com/iamthuypham' target='blank'>
        <Icon name='faGithub' />
        <Typography type='display1'>iamthuypham</Typography>
      </a>
      <a className={classes.connection} href='https://www.linkedin.com/in/iamthuypham' target='blank'>
        <Icon name='faLinkedin' />
        <Typography type='display1'>iamthuypham</Typography>
      </a>
      <a className={classes.connection} href='mailto:phamrosalind@gmail.com' target='blank'>
        <Icon name='faGooglePlusSquare' />
        <Typography type='display1'>phamrosalind</Typography>
      </a>
    </div>
)}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing*4
  },
  connection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignsItem: 'flex-start',
    '& >div': {
      marginRight: 5
    }
  }
});

export default withStyles(styles)(Connection);