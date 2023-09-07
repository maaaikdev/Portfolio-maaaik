import React from "react";
import "./Hero.css"
import mainImage from "../../assets/images/iopw_3yzc_210520.jpg"

const Hero = () => {


    return (
        <div className="container-hero">
            <div className="columns">
                <div className="position">
                    <h1>Front End Developer</h1>
                    <p>Hi, I'm <span>Michael Reyes</span></p>
                    <p>A passionate about turn ideas into code from Colombia.</p>
                </div>
                <div className="photo">
                    <img src={mainImage} alt="Maaaik"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;