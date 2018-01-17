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

const Project = ({ classes, name, link, time, org, request, solution, result, handleChange }) => {
  return (
    <ExpansionPanel className={classes.expansionPanel} onChange={(e,expanded) => handleChange(e,expanded)}>
      <ExpansionPanelSummary className={classes.expansionPanelSummary} expandIcon={<Icon name='faCaretSquareDown' />}>
        <div>
          <Typography type='title'>{name}</Typography>
          <Typography type='display2'>{org}</Typography>
          <Typography type='body2'>{time}</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <div>
          <Typography type='display1'>Request</Typography>
          <Typography type='body1'>{request}</Typography>
        </div>
        <div>
          <Typography type='display1'>Solution</Typography>
          { solution.map((s,i) => (
            <Typography key={i} type='body1'>{s}</Typography>
          ))}
        </div>
        <div>
          <Typography type='display1'>Result</Typography>
          { result && result.map((r,i) => (
            <Typography key={i} type='body1'>{r}</Typography>
          ))}
        </div>
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
  },
  expansionPanelDetails: {
    flexDirection: 'column',
    '& >div': {
      marginBottom: theme.spacing,
      marginLeft: theme.spacing
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