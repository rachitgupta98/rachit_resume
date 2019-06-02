import React from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Education = () => {
  return (
    <div id="education" data-aos="fade-up" data-aos-duration="1500">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="head-about">Education</h1>
          <div data-aos="fade-up" data-aos-duration="1500">
            <Paper className="content-about" elevation={20}>
              <div className="education-detail">
                <p className="bach-title">
                  Madhav Institute Of Technology And Science, Gwalior <br />
                  <span className="bach-course">
                    Bachelor of Engineering{" "}
                    <span className="bach-date">2016-2020</span>
                  </span>
                </p>
                <p className="bach-subject">Computer Science</p>
              </div>
            </Paper>
          </div>
          <br />
          <div data-aos="fade-up" data-aos-duration="2500">
            <Paper className="content-about" elevation={20}>
              <div className="education-detail">
                <p className="bach-title">
                  Scholars's Home Public School, Bhopal
                  <br />
                  <span className="bach-course">
                    Higher Secondary{" "}
                    <span className="bach-date">2014-2015</span>
                  </span>
                </p>
                <p className="bach-subject">
                  Science with Mathematics <br />
                  Percentage:87%
                </p>
              </div>
            </Paper>
          </div>
          <br />
          <div data-aos="fade-up" data-aos-duration="1500">
            <Paper className="content-about" elevation={20}>
              <div className="education-detail">
                <p className="bach-title">
                  Robertson Convent Higher Secondary School, Umaria
                  <br />
                  <span className="bach-course">
                    High School <span className="bach-date">2012-2013</span>
                  </span>
                </p>
                <p className="bach-subject">
                  Science with Mathematics
                  <br />
                  Percentage: 92%
                </p>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
