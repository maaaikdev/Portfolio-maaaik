import React from "react";
import "./Hero.css"
import IMAGES from '../../assets/data/skills.json';
import { FormattedMessage } from "react-intl";

const Hero = () => {

    const filterSkill = ["javascript", "typescript", "react", "angular", "git"]

    const skills = IMAGES.filter(skill => filterSkill.includes(skill.title))

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
    
    function compararPorEdad(a, b) {
        return a.order - b.order;
    }
      
    // Utiliza la función de comparación personalizada con sort()
    skills.sort(compararPorEdad);

    const handleLinkWebsite = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="container-hero">
            <div className="overlay-white"></div>
            <div className="columns">
                <div className="photo">
                    {/* <div className="overlay-white"></div>
                    <img src="images/me-main-hero.jpg" alt="Maaaik"/> */}
                </div>
                <div className="position">
                    <h1>
                        <FormattedMessage 
                            id="hero.title"
                            defaultMessage="Desarrollador Front End"
                        />
                    </h1>
                    <p>
                        <FormattedMessage 
                            id="hero.description"
                            defaultMessage="Hola, Soy Michael Reyes, Un apasionado de convertir ideas en coódigo desde Colombia"
                        />
                    </p>
                    {/* <p>Hi, I'm <span>Michael Reyes,</span><br/>
                    A passionate about turn ideas into code from Colombia.</p> */}
                    <div className="network">
                            <span data-tooltip="Linkedin">
                                <img 
                                    src="images/skills/linkedin-black.svg" 
                                    alt="Linkedin Michael Reyes"
                                    className="networkImg"                                
                                    onClick={() => handleLinkWebsite('https://www.linkedin.com/in/maaaik/')}
                                />
                            </span>
                            <span data-tooltip="Linkedin">
                                <img 
                                    src="images/skills/github.svg" 
                                    alt="Git Hub Michael Reyes"
                                    className="networkImg"
                                    onClick={() => handleLinkWebsite('https://github.com/maaaikdev/')}
                                /> 
                            </span>
                    </div>
                    <div className="skills">
                        <h2>
                            <FormattedMessage 
                                id="hero.titleSkills"
                                defaultMessage="Mis habilidades"
                            />
                        </h2>
                        <div className="main-skills">
                            { IMAGES && skills.map((item) => 
                                <div key={item.id}>
                                    <span data-tooltip={item.title}>
                                        <img src={item.image} alt="logo" />
                                    </span>                        
                                </div>                    
                            )}
                        </div>
                        <div className="created">
                            <img src="images/skills/react.svg" alt="React Portfolio"/>
                            <p>
                                <FormattedMessage 
                                    id="hero.created"
                                    defaultMessage="Este portafolio fue creado con React"
                                />
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
            {/* <div className="skills">
                <h2>My skills</h2>
                <div className="main-skills">
                { IMAGES && skills.map((item) => 
                    <div key={item.id}>
                        <img src={item.image} alt="logo" />
                    </div>                    
                )}
                </div>
            </div> */}
        </div>
    )
}

export default Hero;