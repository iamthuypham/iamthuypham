import React from 'react';
import { withStyles } from 'material-ui/styles';
import breakpoints from '../theme/breakpoints';

import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import Swiper from './Swiper';

const CustomModal = ({ classes, open, projectId }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <DialogContent className={classes.dialogContent}>
        <Swiper projectId={projectId}/>
      </DialogContent>
    </Dialog>
)}

const styles = theme => ({
  root: {
    [`@media (min-width: ${breakpoints['md']}px)`]:{
      width: 'calc(4*100%/12)',
      '& >div:first-child': {
        width: 'calc(4*100%/12)',  
      },
      '& >div:last-child': {
        width: '90%'
      },
    }
  },
  dialogContent: {
    [`@media (min-width: ${breakpoints['md']}px)`]:{
      overflowY: 'hidden'
    }
  }
})

export default withStyles(styles)(CustomModal);