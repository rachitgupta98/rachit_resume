import React from "react";
import { Grid, Paper, Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Skill = () => {
  return (
    <div
      id="skills & interest"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2500"
    >
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="head-about">Skills</h1>
          <Paper className="content-about" elevation={24}>
            <p className="about-detail">Programming Languages & Tools</p>
            <p>
              <Tooltip TransitionComponent={Zoom} title="HTML5">
                <i className="fab fa-html5 fa-3x" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="CSS3">
                <i className="fab fa-css3-alt fa-3x" aria-hidden="true" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="JAVASCRIPT">
                <i className="fab fa-js-square fa-3x" aria-hidden="true" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="REACTJS">
                <i className="fab fa-react fa-3x" aria-hidden="true" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="JAVA">
                <i className="fab fa-java fa-3x" aria-hidden="true" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="NODEJS">
                <i className="fab fa-node fa-3x" aria-hidden="true" />
              </Tooltip>
              <Tooltip TransitionComponent={Zoom} title="MONGODB-DATABASE">
                <i className="fas fa-database fa-3x" aria-hidden="true" />
              </Tooltip>
            </p>
            <p className="about-detail">Interest</p>

            <ul>
              <li>Application Development</li>
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>Algorithm and Data Structure</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skill;
