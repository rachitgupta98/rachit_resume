import React from "react";

import { Paper, Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";

AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Me</h1>
          <p data-aos="fade-up">
            I am a full Stack Developer and pursuing my interest in Computer
            Science and take it to the level where I can make some significant
            contribution in the field of computer science that helps the
            masses.Also I am good at
          </p>

          <div className="row">
            <div>
              <p>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="HTML5"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-html5 fa-3x" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="CSS3"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-css3-alt fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVASCRIPT"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-js-square fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="REACTJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-react fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="JAVA"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-java fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="NODEJS"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fab fa-node fa-3x" aria-hidden="true" />
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="MONGODB-DATABASE"
                  data-aos="zoom-out-left"
                  data-aos-duration="3000"
                >
                  <i className="fas fa-database fa-3x" aria-hidden="true" />
                </Tooltip>
              </p>
            </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
                  guptarachit371@gmail.com
                </span>

                <span>
                  <i className="fas fa-mobile-alt" />
                  8462943194
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> B-15,Pallavi Nagar,
                  Bhopal
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
