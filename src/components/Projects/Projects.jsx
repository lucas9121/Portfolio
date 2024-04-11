import "./Projects.css"
import {BsGithub, BsJoystick} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaBootstrap, FaTruck, FaDungeon, FaCoffee} from 'react-icons/fa'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {SiMongodb, SiExpress, SiReact, SiHeroku, SiAdobephotoshop} from 'react-icons/si'
import {FcGoogle} from 'react-icons/fc'
import GHImages from "../GHImages"
import RFTImages from '../RFTImages'
import WOVImages from '../WOVImages'
import PBImages from "../PBImages"
import ImageSlider from '../ImageSlider'

export default function Projects(props) {
    return (
        <div id="Projects" className={props.toggle ? "project-container dark" : "project-container"}>
            <h2 className={props.toggle ? 'dark-mode' : ''}>My Projects</h2>
            <div className={props.toggle ? "ProjectsGrid nightMode" : "ProjectsGrid"}>
                <article className="my-projects">
                    <ImageSlider images={GHImages} />
                    <div className="game-description">
                        <h3>Gamehub</h3>
                        <p><span id="GH">G</span>amehub is a single-page application (SPA) that I conceived and developed entirely on my own. As a personal project aimed at demonstrating proficiency in the MERN stack, Gamehub draws inspiration from platforms like Steam. Leveraging both front-end and back-end technologies, I engineered this platform from the ground up to ensure a smooth and immersive shopping experience for users.</p>
                        <div className="tech">
                            <div >
                                <p>HTML</p>
                                <AiOutlineHtml5  id='html' className='icon' />
                            </div>
                            <div>
                                <p>CSS</p>
                                <FaCss3Alt  id='css' className='icon' />
                            </div>
                            <div>
                                <p>JavaScript</p>
                                <IoLogoJavascript  id='javascript' className='icon' />
                            </div>
                            <div>
                                <p>MongoDB</p>
                                <SiMongodb  id='mongodb' className='icon' />
                            </div>
                            <div>
                                <p>ExpressJs</p>
                                <SiExpress  id='express' className='icon' />
                            </div>
                            <div>
                                <p>React</p>
                                <SiReact  id='react' className='icon' />
                            </div>
                            <div>
                                <p>NodeJS</p>
                                <IoLogoNodejs  id='node' className='icon' />
                            </div>
                            <div>
                                <p>Heroku</p>
                                <SiHeroku  id='heroku' className='icon' />
                            </div>
                        </div>
                        <div className="project-links-container">
                            <b>Links</b>
                            <ul className='project-links'>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://github.com/lucas9121/Gamehub" target="_blank" rel="noreferrer"><BsGithub className="icon github"  /></a></li>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://gamehub-react.herokuapp.com/games" target="_blank" rel="noreferrer"><BsJoystick  id='unit3' className="icon"/></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="my-projects">
                    <ImageSlider images={PBImages} />
                    <div className="game-description">
                        <h3>Psych Byte</h3>
                        <p><span style={{color: 'green', fontSize: '3rem'}}>P</span>sych Bite is an application that sends an email every morning based off 3 authors revolving around finance, psychology and faith. People can add their email on the website to receive one adn unsubscribe in the link on the email.</p>
                        <div className="tech">
                            <div>
                                <p>HTML</p>
                                <AiOutlineHtml5  id='html' className='icon' />
                            </div>
                            <div>
                                <p>CSS</p>
                                <FaCss3Alt  id='css' className='icon' />
                            </div>
                            <div>
                                <p>JavaScript</p>
                                <IoLogoJavascript  id='javascript' className='icon' />
                            </div>
                            <div>
                                <p>MongoDB</p>
                                <SiMongodb  id='mongodb' className='icon' />
                            </div>
                            <div>
                                <p>React</p>
                                <SiReact  id='react' className='icon' />
                            </div>
                            <div>
                                <p>NodeJS</p>
                                <IoLogoNodejs  id='node' className='icon' />
                            </div>
                            <div>
                                <p>Bootstrap</p>
                                <FaBootstrap  id='bootstrap' className='icon'/>
                            </div>
                        </div>
                        <div className="project-links-container">
                            <b>Links</b>
                            <ul className='project-links'>
                                <li><a className={props.toggle ? "Link-dark-mode Github" : "Link Github"} href="https://github.com/lucas9121/favorite-quotes" target="_blank" rel="noreferrer"><BsGithub className="icon github"  /></a></li>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://psych-bite.herokuapp.com/" target="_blank" rel="noreferrer"><FaCoffee id='PBIcon' className="icon"/></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="my-projects">
                    <ImageSlider images={RFTImages} />
                    <div className="game-description">
                        <h3>Roaming Spoon</h3>
                        <p><span id="RFT">T</span>he Roaming spoon was a group project built in collaboration with a UX team. In the full-stack role, I helped connect the back-end to the front-end and build the search page. Discover amazing food trucks in your area using the Roaming Spoon app! Use The Roaming Spoon to search your favorite food trucks and see their current location. Find out more information for any food truck like location, phone number, business hours, and reviews.</p>
                        <div className="tech">
                            <div>
                                <p>HTML</p>
                                <AiOutlineHtml5  id='html' className='icon' />
                            </div>
                            <div>
                                <p>CSS</p>
                                <FaCss3Alt  id='css' className='icon' />
                            </div>
                            <div>
                                <p>JavaScript</p>
                                <IoLogoJavascript  id='javascript' className='icon' />
                            </div>
                            <div>
                                <p>MongoDB</p>
                                <SiMongodb  id='mongodb' className='icon' />
                            </div>
                            <div>
                                <p>Google API</p>
                                <FcGoogle  id='google' className='icon'/>
                            </div>
                            <div>
                                <p>React</p>
                                <SiReact  id='react' className='icon' />
                            </div>
                            <div>
                                <p>NodeJS</p>
                                <IoLogoNodejs  id='node' className='icon' />
                            </div>
                            <div>
                                <p>Bootstrap</p>
                                <FaBootstrap  id='bootstrap' className='icon'/>
                            </div>
                        </div>
                        <div className="project-links-container">
                            <b>Links</b>
                            <ul className='project-links'>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://github.com/lucas9121/roaming-food-trucks" target="_blank" rel="noreferrer"><BsGithub className="icon github"  /></a></li>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://roaming-spoon.herokuapp.com/" target="_blank" rel="noreferrer"><FaTruck className="icon"  id='unit4'/></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="my-projects">
                        <ImageSlider images={WOVImages} />
                    <div className="game-description">
                        <h3>Wars of Vogrora</h3>
                        <p><span id="WOV">W</span>ars of Vogrora is a RPG turn-style game built using vanila JS. Create a character and join in the fight to save your planet from the forces of evil. Buy potions in the store to increase your attack and defense. Click on the work button to earn money in exchange for energy. Click on the eat button to replenish energy by using money.</p>
                        <div className="tech">
                            <div>
                                <p>HTML</p>
                                <AiOutlineHtml5  id='html' className='icon' />
                            </div>
                            <div>
                                <p>CSS</p>
                                <FaCss3Alt  id='css' className='icon' />
                            </div>
                            <div>
                                <p>JavaScript</p>
                                <IoLogoJavascript  id='javascript' className='icon' />
                            </div>
                            <div>
                                <p>Photoshop</p>
                                <SiAdobephotoshop  id='photoshop' className='icon'/>
                            </div>
                        </div>
                        <div className="project-links-container">
                            <b>Links</b>
                            <ul className='project-links'>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://github.com/lucas9121/Wars-of-Vogrora" target="_blank" rel="noreferrer"><BsGithub className="icon github"  /></a></li>
                                <li><a className={props.toggle ? "Link-dark-mode" : "Link"} href="https://lucas9121.github.io/Wars-of-Vogrora/" target="_blank" rel="noreferrer"><FaDungeon className="icon"  id='unit1'/></a></li>
                            </ul>
                        </div>
                    </div>
                </article>
                {/* <img src='/images/GH/GH2.png' /> */}
            </div>
        </div>
    )
}