import React, { Component, Fragment } from "react";
import HeaderSite from "./myComponent/header";
//import HomePage from "./myComponent/homePage";
import Main from "./myComponent/main";
import About from "./myComponent/About";
import Experience from "./myComponent/experience";
import Education from "./myComponent/education";
import Skill from "./myComponent/Skill";
import Achievements from "./myComponent/achievements";

class AppStart extends Component {
  render() {
    return (
      <Fragment>
        <HeaderSite />
        <br />
        <br />
        <br />
        <Main />
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
