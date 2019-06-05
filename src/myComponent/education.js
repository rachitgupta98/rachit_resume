import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import AOS from "aos";
import "aos/dist/aos.css";
const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ["Bachelor's Degree", "Higher Secondary", "High School"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Pursuing Bachelor of Engineering in Computer Science from Madhav Institute Of Technology And Science, Gwalior`;
    case 1:
      return "Completed Higher Secondary with 87% from Scholars's Home Public School, Bhopal";
    case 2:
      return `Completed High School with 92% from Robertson Convent Higher Secondary School, Umaria`;
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 0,
    year: ["2016 - 2020", "2014 - 2015", "2013 - 2014"]
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className="edu_row" id="education">
        <h1 className="name-css">
          <span className="surname">Education</span>
        </h1>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          data-aos="zoom-in"
        >
          {steps.map((label, index) => (
            <Step key={label} className="edulist">
              <Chip
                label={this.state.year[index]}
                style={{ backgroundColor: "#cac531" }}
              />
              <StepLabel>
                <h1>{label}</h1>
              </StepLabel>
              <StepContent>
                <Typography variant="h6">{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      style={{ backgroundColor: "#2c3e50", color: "white" }}
                      onClick={this.handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Button
              onClick={this.handleReset}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              Go Top
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(VerticalLinearStepper);
