import React from 'react';
import "./Projects.css"
import { BsGithub, BsJoystick } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap, FaTruck, FaDungeon, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiMongodb, SiExpress, SiReact, SiHeroku, SiAdobephotoshop } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import ImageSlider from '../ImageSlider';
import { myProject } from './MyProjects'; 


const techIcons = {
    html: AiOutlineHtml5,
    css: FaCss3Alt,
    javascript: IoLogoJavascript,
    mongodb: SiMongodb,
    expressjs: SiExpress,
    react: SiReact,
    nodejs: IoLogoNodejs,
    heroku: SiHeroku,
    bootstrap: FaBootstrap,
    photoshop: SiAdobephotoshop,
    google: FcGoogle
};

const externalLinkIcons = {
    game: BsJoystick,
    truck: FaTruck,
    door: FaDungeon,
    coffee: FaCoffee
}

export default function Projects(props) {
    return (
        <div id="Projects" className={props.toggle ? "project-container dark" : "project-container"}>
            <h2 className={props.toggle ? 'dark-mode' : ''}>My Projects</h2>
            <div className="projects-grid">
                {myProject.map((project, index) => {
                    const ExternalIcon = externalLinkIcons[project.projectIcon.trim().toLocaleLowerCase()]
                    const iconCssId = project.name.trim().toLocaleLowerCase().replace(/\s/g, '') + "-icon"
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
                                        const Icon = techIcons[tech.trim().toLowerCase()];
                                        if (Icon) {
                                            return (
                                                <div key={i}>
                                                    <p>{tech}</p>
                                                    <Icon id={`${tech.trim().toLowerCase()}`} className='icon' />
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                <div className="project-links-container">
                                    <b>Links</b>
                                    <ul className='project-links'>
                                        <li><a className={props.toggle ? "link-dark-mode" : "link"} href={project.projectLink} target="_blank" rel="noreferrer"><BsGithub className="icon github" /></a></li>
                                        <li><a className={props.toggle ? "link-dark-mode" : "link"} href={project.liveLink} target="_blank" rel="noreferrer">{project.projectIcon ? <ExternalIcon id={iconCssId} className={`icon`} /> : <FaExternalLinkAlt className='icon external-link' /> }</a></li>
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
