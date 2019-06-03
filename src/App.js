import React, { Component, Fragment } from "react";
import HeaderSite from "./myComponent/header";
//import HomePage from "./myComponent/homePage";

import About from "./myComponent/About";
import Experience from "./myComponent/experience";
import Education from "./myComponent/education";
import Skill from "./myComponent/Skill";
import Achievements from "./myComponent/achievements";
import HomePage from "./myComponent/homePage";
import Particles from "react-particles-js";
const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    }
  }
};
class AppStart extends Component {
  render() {
    return (
      <Fragment>
        <HeaderSite />
        <HomePage />
        <About />
        <Experience />
        <Education />
        <Skill />
        <Achievements />

        <Particles className="particles" params={particlesOptions} />
      </Fragment>
    );
  }
}

export default AppStart;
