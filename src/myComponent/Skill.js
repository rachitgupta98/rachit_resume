import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="skill_row" id="skills">
        <h1 className="name-css">
          <span className="surname">Skills</span>
        </h1>
        <div className="wrapper_skill">
          <div>
            <p>Html</p>
            <div className="container">
              <div
                className="skills html"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                90%
              </div>
            </div>

            <p>Css</p>
            <div className="container">
              <div
                className="skills css"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                80%
              </div>
            </div>

            <p>JavaScript</p>
            <div className="container">
              <div
                className="skills js"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                85%
              </div>
            </div>

            <p>ReactJS</p>
            <div className="container">
              <div
                className="skills react"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                75%
              </div>
            </div>
            <p>NodeJS</p>
            <div className="container">
              <div
                className="skills node"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                70%
              </div>
            </div>
            <p>MongoDB</p>
            <div className="container">
              <div
                className="skills db"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                65%
              </div>
            </div>
            <p>Python</p>
            <div className="container">
              <div
                className="skills python"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                50%
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default Skills;
