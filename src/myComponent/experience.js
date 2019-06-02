import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import logomits from "../images/mits logo.jpg";
import logoacm from "../images/acm.png";
import logopr from "../images/0.png";
import { Hidden } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const styles = theme => ({
  card: {
    display: "flex",
    width: "auto",
    flexDirection: "row",
    justifyContent: "center"
  },
  card1: {
    display: "flex",
    width: "200px",

    float: "left"
  },
  card2: {
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  detail: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "0 1 auto"
  },
  cover: {
    width: "100%"
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="experience" className="content-about">
        {" "}
        <h1 className="head-about">Work Experience</h1>
        <Card className="exp-content">
          <Hidden smDown>
            <Card
              className={classes.card1}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <CardMedia
                className={classes.cover}
                image={logomits}
                title="Live from space album cover"
              />
            </Card>
          </Hidden>
          <Card
            className={classes.card2}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className={classes.detail}>
              <CardContent className={classes.content}>
                <div className="education-detail">
                  <p className="exp-title">
                    Project Developer <br />
                    <span className="bach-course">
                      MITS,Gwalior{" "}
                      <span className="bach-date">Jan 2019-May 2019</span>
                    </span>
                  </p>
                  <p className="bach-subject">
                    Developed a full functional project for the MP Police . It
                    is a Crime Detection System which will identify the
                    criminals in the prone areas.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </Card>
        {/* acm */}
        <br />
        <br />
        <Card className="exp-content">
          <Hidden smDown>
            <Card
              className={classes.card1}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <CardMedia
                className={classes.cover}
                image={logoacm}
                title="Live from space album cover"
              />
            </Card>
          </Hidden>
          <Card
            className={classes.card2}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className={classes.detail}>
              <CardContent className={classes.content}>
                <div className="education-detail">
                  <p className="exp-title">
                    Web Developer <br />
                    <span className="bach-course">
                      MITS,Gwalior{" "}
                      <span className="bach-date">Jan 2019-Feb 2019</span>
                    </span>
                  </p>
                  <p className="bach-subject">
                    Developed the official website for the event name AlgoRythm
                    conducted by
                    <b> MITS ACM STUDENT CHAPTER</b>.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </Card>
        {/* Predico */}
        <br />
        <br />
        <Card className="exp-content">
          <Hidden smDown>
            <Card
              className={classes.card1}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <CardMedia
                className={classes.cover}
                image={logopr}
                title="Live from space album cover"
              />
            </Card>
          </Hidden>

          <Card
            className={classes.card2}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className={classes.detail}>
              <CardContent className={classes.content}>
                <div className="education-detail">
                  <p className="exp-title">
                    Intern <br />
                    <span className="bach-course">
                      MITS,Gwalior{" "}
                      <span className="bach-date">June 2019- present</span>
                    </span>
                  </p>
                  <p className="bach-subject">Currently working</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Experience);
