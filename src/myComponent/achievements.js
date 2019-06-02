import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="head-about">Achievements</h1>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper className="content-about" elevation={24}>
              <div className="achievements">
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                    Selected for Vigyan Manthan Yatra 2012-13 and recipient of
                    the Scholarship offered to Top 100 students only by M.P.
                    Council of Science and Technology.
                  </li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                    Benefited under the Pratibhashali Vidyarthu Protsahan Yojana
                    (PVPY) by M.P. Govt.
                  </li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                    Secured international-rank 491 and state-rank 57 in first
                    round in International Olympiad of Science 2015 and
                    qualified for second round.
                  </li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                    Got the Rising Star Trophy and Certificate of Excellence for
                    excellence in Academic performance.
                  </li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />
                    Recipient of Certificate by Reserve Bank Of India, Bhopal
                    for participating in Essay Competition
                  </li>
                  <li>
                    <i className="fa-li fa fa-trophy text-warning" />2
                    <sup>nd</sup> position in Bharat-Manthan a quiz Competition
                    held in MANIT Bhopal
                  </li>
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
