import React, { useEffect, useState, useCallback } from 'react';
import "./Tabs.css";
import projectList from "../../components/ProjectItems"
import JobsComponent from '../../components/Jobs/Jobs';
import imageSkillList from '../../components/ImagesSkills'

const Tabs = () => {

    const [projects, setProjects] = useState([]);
    const [imagesProject, serImageProject] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [objectsInCategory, setObjectsInCategory] = useState([]);

    useEffect(() => {
        //only called once
        projectList()
            .then((res) => {
                setProjects(res);                
            });
            
        imageSkillList()
            .then((response) => {
                serImageProject(response);                
            })
    }, );

    useEffect(() => {
        const filterByCategory = projects.filter(
          (item) => item.category === categories[activeTab]
        );
        setObjectsInCategory(filterByCategory);
    }, [projects, activeTab]);

    const categories = [...new Set(projects.map((item) => item.category))];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };    

    return (
        
        <>
          <h2 className='title-projects'>My projects</h2>
             <div className='tab-container'>
                <ul className="tabs">
                {projects.length > 0 && categories.map((tab, index) => (
                    <li
                        key={index}
                        className={index === activeTab ? 'active-tab' : ''}
                        onClick={() => handleTabClick(index, tab)}
                    >
                        {imagesProject.length > 0 && imagesProject[0] && (
                            <img 
                                src={imagesProject.length > 0 && tab === 'Angular' ? imagesProject[0].image : imagesProject[7].image}
                                alt='img' 
                                className='img-tab'
                            />

                        )}
                        {tab}
                    </li>
                ))}
                </ul>
                <div className="tab-content">
                    {projects.length > 0 && projects.map((tab, index) => (
                        <div
                            key={index}
                            className={index === activeTab ? 'tab-pane active' : 'tab-pane'}
                        >
                        <JobsComponent key={tab.id} list={objectsInCategory} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Tabs;