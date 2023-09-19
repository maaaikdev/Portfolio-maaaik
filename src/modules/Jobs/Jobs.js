/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./Jobs.css";
import imageSkillList from '../../components/ImagesSkills';
import { FormattedMessage } from "react-intl";

const JobsComponent = ({list}) => {
    
    const [imagesSkills, serImagesSkills] = useState([]);

    useEffect(() => {
        imageSkillList()
            .then((response) => {
                serImagesSkills(response);
            })
    });

    const getImageSkill = (skill) => {
        const imgSkill = imagesSkills.filter(img => img.title === skill)        
        if(imgSkill.length > 0) return imgSkill[0].image
    }

    const handleLinkWebsite = (url) => {
        window.open(url, '_blank');
    }

    const handleLinkGihub = (url) => {
        window.open(url, '_blank');
    }

    const lang = localStorage.getItem('lang')

    return (
        <>
            {list.length > 0 && list?.map((project, index) => (
                <div className="content-box">
                    <div className="left-job">
                        <h3>
                            <FormattedMessage 
                                id="projects.titleWeb"
                                defaultMessage={project.title}
                                values={{
                                    title: lang === 'es-CO' ? project.titleES : project.titleUS
                                }}
                            />
                        </h3>
                        <p>
                            <FormattedMessage 
                                id="projects.description"
                                defaultMessage="Un sitio web de Salud y seguridad en el trabajo para el cliente Aserseguridad, fue creada en Angular con formularios en HubSpot."
                                values={{
                                    description: lang === 'es-CO' ? project.descriptionES : project.descriptionUS
                                }}
                            /> 
                        </p>
                        <h4>
                            <FormattedMessage 
                                id="projects.tech"
                                defaultMessage="Tecnología usada"
                            />
                        </h4>
                        <div className="skills-list">
                            {project.tech?.map((skill, index) => (
                                <div key={index}>
                                    <span data-tooltip={skill}>
                                        <img src={getImageSkill(skill)} alt={project.title} className="img-skill"/>
                                    </span>                                   
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-job">
                        <div className="box-project-img">
                            <img src={project.image} alt={project.title} />
                        </div>                            
                        <div className="network">
                            {imagesSkills.length > 0 && (
                                <img 
                                    src={imagesSkills[10].image} 
                                    alt={imagesSkills[10].title} 
                                    className="networkImg"
                                    onClick={() => handleLinkWebsite(project.url)}
                                />                            
                            )}
                            {imagesSkills.length > 0 && (
                                <img 
                                    src={imagesSkills[3].image} 
                                    alt={imagesSkills[3].title} 
                                    className="networkImg"
                                    onClick={() => handleLinkGihub(project.urlGithub)}
                                />                        
                            )}
                        </div>
                    </div>
                </div>
                            
            ))}
        </>
    )
}

export default JobsComponent;