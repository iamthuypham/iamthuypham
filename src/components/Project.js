import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import Icon from './Icon';

const Project = ({ classes, name, link, time, org, detail, handleChange }) => {
  return (
    <ExpansionPanel className={classes.expansionPanel} onChange={(e,expanded) => handleChange(e,expanded)}>
      <ExpansionPanelSummary className={classes.expansionPanelSummary} expandIcon={<Icon name='faCaretSquareDown' />}>
        <div>
          <Typography type='title'>{name}</Typography>
          <Typography type='display2'>{org}</Typography>
          <Typography type='body2'>{time}</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography type='body1'>{detail}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
)}

const styles = theme => ({
  root: {
    marginBottom: theme.spacing*2
  },
  expansionPanel: {
    boxShadow: 'none',
    '&:before':{
      backgroundColor: 'transparent'
    },
    marginBottom: theme.spacing*2
  },
  expansionPanelSummary: {
    justifyContent: 'flex-end',
    '&>div:first-child': {
      marginTop: theme.spacing*2,
      marginBottom: theme.spacing
    }
  }
});

Project.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default withStyles(styles)(Project);