/* eslint-disable array-callback-return */
import React from "react";
import "./AboutMe.css";

const AboutMeComponent = ({list}) => {    
 

    return (
        <>
            <h2>About Me</h2>
            <div className="box-about-me">
                {/* <h3>Our work transform lives</h3> */}
                <p>As a Front-End Developer, I turn ideas into code, i have had to chance to participate in several projects, Information, Financial, Audiovisual, Dashboards and Workflow Websites, i have worked some libraries like BPMN.js, Chart.js, Heatmap.js and Frameworks/Libraries as Angular, React and VCL. I am to able to make <span>attractive, interactive, useful</span> and <span>professional</span> websites.</p>
                <p className="small">I like to learn things constantly, in this moment I'm improving my <span>React</span> and <span>English</span> skills.</p>
                <p className="small">In my free time, i love to running over the mountains and go to the gym so try to keep a healthy lifestyle. I have two pets, Amatista (dog) and Frida (cat), they are very affectionate.</p>
                <div className="level-engilsh">
                    <img src="images/flag/usa.png" alt="USA Flag" />
                    English level (A2/B1)
                </div>
            </div>
        </>
    )
}

export default AboutMeComponent;