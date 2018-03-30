import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
};

class ProgressMobileStepper extends React.Component {
  state = {
		activeStep: 0,
		text: ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', ]
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
	};
	
  wow = () => {
    const { classes, theme } = this.props;
		
		return (
			<MobileStepper
			variant="text"
			steps={10}
			position="static"
			activeStep={this.state.activeStep}
			className={classes.root}
			nextButton={
				<Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 9}>
					Next
					{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
				</Button>
			}
			backButton={
				<Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
					{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
					Back
				</Button>
			}
			/>
		)
	};
	

  render() {
    return (
			<div>
				{this.wow()}
				<h2>hahaha i fooled you!</h2>
				<h1>{this.state.text[this.state.activeStep]}</h1>
			</div>
		);
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);