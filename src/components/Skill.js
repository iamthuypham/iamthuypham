import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const Skill = ({ classes, name }) => {
  return (
    <div className={classes.root}>
      <Chip label={name} className={classes.chip} />
    </div>
)}

const styles = theme => ({
  root: {
    display: 'inline',
  },
  chip: {
    margin: theme.spacing,
  },
});

Skill.propTypes = {
};

export default withStyles(styles)( Skill);