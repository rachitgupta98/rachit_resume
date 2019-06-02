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
        <HomePage />
        <About />

        <Experience />

        <Education />

        <Skill />
        <Achievements />
      </Fragment>
    );
  }
}

export default AppStart;
