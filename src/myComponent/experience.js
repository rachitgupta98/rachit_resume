import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Work <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Project Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>MITS</h2>
              <Typography variant="body2" color="inherit" component="p">
                Developed a full functional project for the MP Police . It is a
                Crime Detection System which will identify the criminals in the
                prone areas.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>May 2019</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Web Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>ACM Student Chapter</h2>
              <Typography variant="body2" color="inherit">
                Developed the official website for the event name AlgoRythm
                conducted by <b> MITS ACM STUDENT CHAPTER</b>.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>Feb 2019</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Backend Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>AgroGram</h2>
              <Typography variant="body2" color="inherit" component="p">
                Currently Working
              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2019 -</span>
              <span>Present</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
