import React from 'react';
import "./Projects.css"
import { Link } from 'react-router-dom';
import { BsGithub, BsJoystick } from 'react-icons/bs';
import { BiLogoNetlify } from "react-icons/bi";
import { FaCss3Alt, FaBootstrap, FaTruck, FaDungeon, FaCoffee, FaExternalLinkAlt, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiExpress, SiReact, SiHeroku, SiAdobephotoshop, SiExpo } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
import { FcGoogle } from 'react-icons/fc';
import ImageSlider from '../ImageSlider';
import myProjectsData from './Data/ProjectsData.json'; 


const techIcons = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: IoLogoJavascript,
    mongodb: SiMongodb,
    expressjs: SiExpress,
    react: SiReact,
    reactnative: TbBrandReactNative,
    nodejs: FaNodeJs,
    heroku: SiHeroku,
    bootstrap: FaBootstrap,
    photoshop: SiAdobephotoshop,
    google: FcGoogle,
    expo: SiExpo,
    firebase: IoLogoFirebase,
    git: FaGitAlt,
    netlify: BiLogoNetlify,
};

const externalLinkIcons = {
    game: BsJoystick,
    truck: FaTruck,
    door: FaDungeon,
    coffee: FaCoffee,
    none: FaExternalLinkAlt
}

const Projects = (props) => {
    return (
        <div id="Projects" className={props.toggle ? "project-container dark" : "project-container"}>
            <h2 className={props.toggle ? 'dark-mode' : ''}>My Projects</h2>
            <div className="projects-grid">
                {myProjectsData.projects.map((project, index) => {
                    const iconName = project.projectIcon.trim().toLocaleLowerCase()
                    const ExternalIcon = externalLinkIcons[iconName] ? externalLinkIcons[iconName] : externalLinkIcons['none']
                    const iconCssId = iconName === 'none' ? 'external-icon' : project.name.trim().toLocaleLowerCase().replace(/\s/g, '') + "-icon"
                    let iconsCount = 0
                    return(
                        <article key={index} className="my-projects">
                            <ImageSlider images={project.images} />
                            <div className="game-description">
                                <h3>{project.name}</h3>
                                <p className='summary'>
                                    <span style={{color: project.color,}}>{project.summary.charAt(0)}</span>
                                    {project.summary.slice(1)}
                                </p>
                                <div className="tech">
                                    {project.tech.split(',').map((tech, i) => {
                                        if( iconsCount > 7) return
                                        const Icon = techIcons[tech.trim().replace(/\s/g, '').toLowerCase()];
                                        if (Icon) {
                                            iconsCount++
                                            return (
                                                <div key={i}>
                                                    <p>{tech}</p>
                                                    <Icon id={`${tech.trim().replace(/\s/g, '').toLowerCase()}`} className='icon' />
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                <div className="project-links-container">
                                    <ul className='project-links'>
                                        {project.projectLink && <li><a className={props.toggle ? "link-dark-mode" : "link"} href={project.projectLink} target="_blank" rel="noreferrer"><BsGithub className="icon github" /></a></li>}
                                        {project.description && <li><Link className={props.toggle ? "btn" : "btn"} to={`/case-study/${project.name.toLocaleLowerCase()}`}  rel="noreferrer">Case Study</Link></li> }
                                        {project.liveLink && <li><a className={props.toggle ? "link-dark-mode" : "link"} href={project.liveLink} target="_blank" rel="noreferrer"><ExternalIcon id={iconCssId} className={`icon`} /></a></li>}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default React.memo(Projects)
