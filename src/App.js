import React, { Component, Fragment } from "react";
import HeaderSite from "./myComponent/header";
//import HomePage from "./myComponent/homePage";

import About from "./myComponent/About";
import Experience from "./myComponent/experience";
import Education from "./myComponent/education";
import Skill from "./myComponent/Skill";
import Achievements from "./myComponent/achievements";
import HomePage from "./myComponent/homePage";

class AppStart extends Component {
  render() {
    return (
      <Fragment>
        <HeaderSite />
        <br />
        <br />
        <br />
        <HomePage />
        <About />
        <br />
        <br />
        <br />
        <Experience />
        <br />
        <br />
        <br />
        <Education />
        <br />
        <br />
        <br />
        <Skill />
        <Achievements />
      </Fragment>
    );
  }
}

export default AppStart;
