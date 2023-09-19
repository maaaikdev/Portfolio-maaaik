/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./Jobs.css";
import imageSkillList from '../../components/ImagesSkills';
import { FormattedMessage } from "react-intl";

const JobsComponent = ({list}) => {
    const [imagesSkills, setImagesSkills] = useState([]);

    useEffect(() => {
        // Fetch image skills data only once when the component mounts
        if (imagesSkills.length === 0) {
            imageSkillList()
                .then((response) => {
                    setImagesSkills(response);
                })
                .catch((error) => {
                    console.error("Error fetching image skills:", error);
                });
        }
    }, [imagesSkills]);

    const getImageSkill = (skill) => {
        const imgSkill = imagesSkills.find((img) => img.title === skill);
        return imgSkill ? imgSkill.image : '';
    }

    const handleLinkWebsite = (url) => {
        window.open(url, '_blank');
    }

    const handleLinkGihub = (url) => {
        window.open(url, '_blank');
    }

    const lang = localStorage.getItem('lang')

    const renderProjectDetails = (project) => {
        return (
            <div className="content-box" key={project.id}>
                <div className="left-job" >
                        <h3>
                            {lang === 'es-CO' ? project.titleES : project.titleUS}
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
                            {project.length > 0 && project.tech.map((skill) => (
                                <div>
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
        );
    }

    return (
        <>
            {list.length > 0 && list.map((project) => (
                    renderProjectDetails(project)
            ))}
        </>
    )
}

export default JobsComponent;