import IMAGES from '../assets/data/skills.json';

const imageSkillList = () => {
    return new Promise((resolve, reject) => {
        resolve(IMAGES)
    })
}

export default imageSkillList;