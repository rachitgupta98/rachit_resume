import React from "react";

import { Grid, Paper } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div id="about">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="head-about">About</h1>
          <div data-aos="zoom-in" data-aos-duration="2500">
            <Paper className="content-about" elevation={24}>
              <div className="about-detail1">
                Hello, I'm Rachit Gupta
                <br />
                <div className="about-sub-detail">
                  <i className="fas fa-birthday-cake" />
                  23/03/1998
                  <br />
                  <i className="fas fa-envelope" />
                  guptarachit371@gmail.com
                  <br />
                  <i className="fas fa-mobile-alt" />
                  8462943194
                  <br />
                  <i className="fas fa-map-marker-alt" /> B-15,Pallavi Nagar,
                  Bhopal
                </div>
              </div>
              <p className="about-detail">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high level overviews. Iterative approaches
                to corporate strategy foster collaborative thinking to further
                the overall value proposition.
              </p>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
