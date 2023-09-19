import React, { useEffect, useState } from 'react';
import "./Tabs.css";
import projectList from "../ProjectItems"
import JobsComponent from '../../modules/Jobs/Jobs';
import imageSkillList from '../ImagesSkills';
import { FormattedMessage } from 'react-intl';

const Tabs = () => {

    const [projects, setProjects] = useState([]);
    const [imagesProject, serImageProject] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [objectsInCategory, setObjectsInCategory] = useState([]);

    useEffect(() => {
        // Fetch project and image data when the component mounts
        const fetchData = async () => {
            try {
                const projectData = await projectList();
                const imageSkillData = await imageSkillList();

                setProjects(projectData);
                serImageProject(imageSkillData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const categories = [...new Set(projects.map((item) => item.category))];

    useEffect(() => {
        const filterByCategory = projects.filter(
            (item) => item.category === categories[activeTab]
        );
        setObjectsInCategory(filterByCategory);
    }, [projects, activeTab]);


    const handleTabClick = (index) => {
        setActiveTab(index);
    };    

    return (
        
        <>
            <h2 className='title-projects'>
                <FormattedMessage 
                    id="projects.title"
                    defaultMessage="Mis proyectos"
                />
            </h2>
             <div className='tab-container'>
                <ul className="tabs">
                {projects.length > 0 && categories.map((tab, index) => (
                    <li
                        key={index}
                        className={index === activeTab ? 'active-tab' : ''}
                        onClick={() => handleTabClick(index)}
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
                            key={tab.id}
                            className={index === activeTab ? 'tab-pane active' : 'tab-pane'}
                        >
                            <JobsComponent tabId={tab.id} list={objectsInCategory} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Tabs;