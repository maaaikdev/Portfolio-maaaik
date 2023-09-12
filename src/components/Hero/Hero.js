import React from "react";
import "./Hero.css"
import mainImage from "../../assets/images/iopw_3yzc_210520.jpg"
import IMAGES from '../../assets/data/skills.json'

const Hero = () => {

    const filterSkill = ["javascript", "typescript", "react", "angular", "git"]

    const skills = IMAGES.filter(skill => filterSkill.includes(skill.title))

    console.log("ARRAYS SKILLS 1", skills);
    

    skills.forEach((item) => {
        if(item.title === 'javascript'){
            item.order = 1
        } else if (item.title === 'typescript') {
            item.order = 2
        } else if (item.title === 'react') {
            item.order = 3
        } else if (item.title === 'angular') {
            item.order = 4
        } else {
            item.order = 5
        }
    });

    console.log("ARRAYS SKILLS 2", skills);
    
    function compararPorEdad(a, b) {
        return a.order - b.order;
    }
      
    // Utiliza la función de comparación personalizada con sort()
    skills.sort(compararPorEdad);
      
    console.log("Reorder", skills);

    console.log("IMAGES HEO", IMAGES)
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
            <div className="skills">
                <h2>My skills</h2>
                <div className="main-skills">
                { IMAGES && skills.map((item) => 
                    <div key={item.id}>
                        <img src={item.image} alt="logo" />
                    </div>                    
                )}
                </div>
            </div>
        </div>
    )
}

export default Hero;