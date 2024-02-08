/* eslint-disable array-callback-return */
import React from "react";
import "./AboutMe.css";
import { FormattedMessage } from "react-intl";

const AboutMeComponent = ({list}) => {    
 

    return (
        <>
            <h2>
                <FormattedMessage 
                    id="aboutme.title"
                    defaultMessage="Acerca de mi"
                />
            </h2>
            <div className="box-about-me">
                {/* <h3>Our work transform lives</h3> */}
                <p>
                    <FormattedMessage 
                        id="aboutme.description1"
                        defaultMessage="Como Desarrollador Front End, convierto ideas en código, he tenido la oportunidad de participar en diferentes proyectos de sitios web como Información, Financiero, Audivisual, Dashboards y Flujos de trabajo. He trabajado con algunas librerias como BPMN.js, Chart.js, Heatmap.js and Frameworks/Librerias como Angular, React and VCL. Estoy en la capacidad de hacer sitios web atractivos, interactivos, utiles y profesionales"
                    />
                </p>
                {/* <p>As a Front-End Developer, I turn ideas into code, i have had to chance to participate in several projects, Information, Financial, Audiovisual, Dashboards and Workflow Websites, i have worked some libraries like BPMN.js, Chart.js, Heatmap.js and Frameworks/Libraries as Angular, React and VCL. I am to able to make <span>attractive, interactive, useful</span> and <span>professional</span> websites.</p> */}
                {/* <p className="small">I like to learn things constantly, in this moment I'm improving my <span>React</span> and <span>English</span> skills.</p> */}
                <p>
                    <FormattedMessage 
                        id="aboutme.description2"
                        defaultMessage="Estoy en constante aprendizaje, En este momento estoy mejorando mis habilidades en React e Ingles."
                    />
                </p>

                <p>
                    <FormattedMessage 
                        id="aboutme.description3"
                        defaultMessage="En mi tiempo libre, me encanta correr por las montañas, ir al gimnasio e intento mantener un estilo de vida saludable. Tengo 2 mascotas, Amatista (perrita) y Frida (Gata), ellas son muy cariñosas"
                    />
                </p>
                {/* <p className="small">In my free time, i love to running over the mountains and go to the gym so try to keep a healthy lifestyle. I have two pets, Amatista (dog) and Frida (cat), they are very affectionate.</p> */}
                <div className="level-engilsh">
                    <img src="images/flag/usa.png" alt="USA Flag" />
                    <FormattedMessage 
                        id="aboutme.english"
                        defaultMessage="Nivel de ingles (A2/B1)"
                    />
                    {/* English level (A2/B1) */}
                </div>
            </div>
        </>
    )
}

export default AboutMeComponent;