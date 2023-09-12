/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./Jobs.css";
import imageSkillList from '../ImagesSkills'

const JobsComponent = ({list}) => {

    console.log("list", list)

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

    return (
        <>
            {list.length > 0 && list?.map((project, index) => (
                <div className="content-box">
                    <div className="left-job">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <h4>Tech used</h4>
                        <div className="skills-list">
                            {project.tech?.map((skill, index) => (
                                <div key={index}>
                                    <img src={getImageSkill(skill)} alt={project.title} className="img-skill"/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-job">
                        <div className="box-project-img">
                            <img src={project.image} alt={project.title} />
                        </div>                            
                        <div className="network">
                            <img 
                                src={imagesSkills[10].image} 
                                alt={imagesSkills[10].title} 
                                className="networkImg"
                                onClick={() => handleLinkWebsite(project.url)}
                            />
                            <img 
                                src={imagesSkills[3].image} 
                                alt={imagesSkills[3].title} 
                                className="networkImg"
                                onClick={() => handleLinkGihub(project.urlGithub)}
                            />
                        </div>
                    </div>
                </div>
                            
            ))}
        </>
    )
}

export default JobsComponent;