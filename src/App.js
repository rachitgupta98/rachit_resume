import React, { Component, Fragment } from "react";
import HeaderSite from "./myComponent/header";
//import HomePage from "./myComponent/homePage";

import About from "./myComponent/About";
import Experience from "./myComponent/experience";
import Education from "./myComponent/education";
import Skill from "./myComponent/Skill";
import Achievements from "./myComponent/achievements";
import HomePage from "./myComponent/homePage";
import Footer from "./myComponent/footer";
import Particles from "react-particles-js";
const particlesOptions = {
  particles: {
    number: {
      value: 80,
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
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 60,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.1,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 100,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 2
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
class AppStart extends Component {
  render() {
    return (
      <Fragment>
        <HeaderSite />
        <HomePage />
        <About />
        <div className="bg_color">
          <Experience /> <Education />
          <Skill />
          <Achievements />
          <Footer />
        </div>

        <Particles className="particles" params={particlesOptions} />
      </Fragment>
    );
  }
}

export default AppStart;
