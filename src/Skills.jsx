import React from "react";

let skills = [
    {name: 'JavaScript', imgSrc: 'javascript.svg', alt: 'JavaScript logo'},
    {name: 'React', imgSrc: 'logo512.png', alt: 'React logo'},
    {name: 'NodeJS', imgSrc: 'nodejs.svg', alt: 'NodeJS logo'},
    {name: 'PHP', imgSrc: 'php.svg', alt: 'PHP logo'},
    {name: 'Python', imgSrc: 'python.svg', alt: 'Python logo'},
    {name: 'HTML 5', imgSrc: 'html.svg', alt: 'HTML 5 logo'},
    {name: 'CSS', imgSrc: 'css.svg', alt: 'CSS logo'},
    {name: 'C++', imgSrc: 'c++.svg', alt: 'C plus plus logo'},
    {name: 'Linux', imgSrc: 'linux.svg', alt: 'Linux OS logo'},
    {name: 'Git', imgSrc: 'git.svg', alt: 'Git logo'},
    {name: 'WordPress', imgSrc: 'wordpress.svg', alt: 'WordPress logo'},
    {name: 'Cloud Computing', imgSrc: 'cloud-computing.svg', alt: 'A logo describing Cloud Computing'}
]

function Skills() {
    return (
        <>
        <div className="divider-container">
            <div className="divider"></div>
        </div>
        <h1 id="skills">My Skills</h1>
        <SkillsGrid skills={skills} />
        </>
    )
}

function SkillsGrid ({skills}) {
    return (
        <div className="skills-container">
            <div className="skills-grid">
                {skills.map(((skill, index) => {
                    return (
                        <>
                            <div key={index} className="skill-card">
                                <img src={skill.imgSrc} className="skill-img" alt={skill.alt} />
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        </>
                    )
                }))}
            </div>
        </div>
    )
}

export default Skills;