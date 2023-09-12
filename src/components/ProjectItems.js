import projectsItems from '../assets/data/projects.json';

const projectList = () => {
    return new Promise((resolve, reject) => {
        resolve(projectsItems)
    })
}

export default projectList;