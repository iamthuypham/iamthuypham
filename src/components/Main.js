import React from 'react';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import Connection from './Connection';
import Project from './Project';
import Skill from './Skill';
import CustomModal from './CustomModal';

import projects from './ProjectData';
import skills from './SkillData';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      projectId: ''
    }
    this.handleChange = (e, expanded, projectId) => {
      this.setState({ modal: expanded, projectId })
    }
    this.handleClose = () => {
      this.setState({ modal: false })
    }
  }
  render() {
  const { classes } = this.props;
  const { modal, projectId } = this.state;
  return (
    <div className={classes.root}>
      <Connection />
      <Divider />
      <div className={classes.section} id='project'>
        {skills && skills.map((skill) =>
          <Skill key={skill} name={skill}/>
        )}
        {projects && projects.map((project) => (
          <Project key={project.id} name={project.name} link={project.link} time={project.time} org={project.org} 
            request={project.request}
            solution={project.solution}
            result={project.result}
            handleChange={(e, expanded) => this.handleChange(e, expanded, project.id)}/>  
        ))}
      </div>
      <CustomModal open={modal} projectId={projectId}/>
  </div>
)}
}

const styles = theme => ({
  root: {
    height: '100vh',
    overflow: 'scroll'
  },
  section: {
    padding: theme.spacing*4
  },
});

export default withStyles(styles)(Main);