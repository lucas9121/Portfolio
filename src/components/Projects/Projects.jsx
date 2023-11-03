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
        <div className={props.toggle ? "ProjectsGrid nightMode" : "ProjectsGrid"}>
            <article className="my-projects">
                <ImageSlider images={GHImages} />
                <div className="game-description">
                    <h1>Gamehub</h1>
                    <p><span id="GH">G</span>amehub is a full CRUD mock online gaming store. You can browse through different game titles or search for them in the search bar. Some of the features of available include; purchasing games, writing reviews, as well as editing or deleting your reviews, creating and editing your own games and editing your account. Sign up with a Gamer or Developer account to try all of the different features the website has to offer.</p>
                    <div className="tech">
                        <div >
                            <p>HTML</p>
                            <AiOutlineHtml5 style={{height: '2rem', width: '3rem'}} className='html' />
                        </div>
                        <div>
                            <p>CSS</p>
                            <FaCss3Alt style={{height: '2rem', width: '3rem'}} className='css' />
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <IoLogoJavascript style={{height: '2rem', width: '3rem'}} className='js-sq' />
                        </div>
                        <div>
                            <p>MongoDB</p>
                            <SiMongodb style={{height: '2rem', width: '3rem'}} className='mdb' />
                        </div>
                        <div>
                            <p>ExpressJs</p>
                            <SiExpress style={{height: '2rem', width: '3rem'}} className='express' />
                        </div>
                        <div>
                            <p>React</p>
                            <SiReact style={{height: '2rem', width: '3rem'}} className='react' />
                        </div>
                        <div>
                            <p>NodeJS</p>
                            <IoLogoNodejs style={{height: '2rem', width: '3rem'}} className='node' />
                        </div>
                        <div>
                            <p>Heroku</p>
                            <SiHeroku style={{height: '2rem', width: '3rem'}} className='heroku' />
                        </div>
                    </div>
                    <ul>
                        <li><a className={props.toggle ? "LinkNight Github" : "Link Github"} href="https://github.com/lucas9121/Gamehub" target="_blank" rel="noreferrer"><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                        <li><a className={props.toggle ? "LinkNight" : "Link"} href="https://gamehub-react.herokuapp.com/games" target="_blank" rel="noreferrer"><BsJoystick style={{height: '2rem', width: '3rem'}} id='unit3'/></a></li>
                    </ul>
                </div>
            </article>
            <article className="my-projects">
                <ImageSlider images={PBImages} />
                <div className="game-description">
                    <h1>Psych Byte</h1>
                    <p><span style={{color: 'green', fontSize: '3rem'}}>P</span>sych Bite is an application that sends an email every morning based off 3 authors revolving around finance, psychology and faith. People can add their email on the website to receive one adn unsubscribe in the link on the email.</p>
                    <div className="tech">
                        <div>
                            <p>HTML</p>
                            <AiOutlineHtml5 style={{height: '2rem', width: '3rem'}} className='html' />
                        </div>
                        <div>
                            <p>CSS</p>
                            <FaCss3Alt style={{height: '2rem', width: '3rem'}} className='css' />
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <IoLogoJavascript style={{height: '2rem', width: '3rem'}} className='js-sq' />
                        </div>
                        <div>
                            <p>MongoDB</p>
                            <SiMongodb style={{height: '2rem', width: '3rem'}} className='mdb' />
                        </div>
                        <div>
                            <p>React</p>
                            <SiReact style={{height: '2rem', width: '3rem'}} className='react' />
                        </div>
                        <div>
                            <p>NodeJS</p>
                            <IoLogoNodejs style={{height: '2rem', width: '3rem'}} className='node' />
                        </div>
                        <div>
                            <p>Bootstrap</p>
                            <FaBootstrap style={{height: '2rem', width: '3rem'}} className='bootstrap'/>
                        </div>
                    </div>
                    <ul>
                        <li><a className={props.toggle ? "LinkNight Github" : "Link Github"} href="https://github.com/lucas9121/favorite-quotes" target="_blank" rel="noreferrer"><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                        <li><a className={props.toggle ? "LinkNight" : "Link"} href="https://psych-bite.herokuapp.com/" target="_blank" rel="noreferrer"><FaCoffee id='PBIcon'/></a></li>
                    </ul>
                </div>
            </article>
            <article className="my-projects">
                <ImageSlider images={RFTImages} />
                <div className="game-description">
                    <h1>Roaming Spoon</h1>
                    <p><span id="RFT">T</span>he Roaming spoon was a group project built in collaboration with a UX team. In the full-stack role, I helped connect the back-end to the front-end and build the search page. Discover amazing food trucks in your area using the Roaming Spoon app! Use The Roaming Spoon to search your favorite food trucks and see their current location. Find out more information for any food truck like location, phone number, business hours, and reviews.</p>
                    <div className="tech">
                        <div>
                            <p>HTML</p>
                            <AiOutlineHtml5 style={{height: '2rem', width: '3rem'}} className='html' />
                        </div>
                        <div>
                            <p>CSS</p>
                            <FaCss3Alt style={{height: '2rem', width: '3rem'}} className='css' />
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <IoLogoJavascript style={{height: '2rem', width: '3rem'}} className='js-sq' />
                        </div>
                        <div>
                            <p>MongoDB</p>
                            <SiMongodb style={{height: '2rem', width: '3rem'}} className='mdb' />
                        </div>
                        <div>
                            <p>Google API</p>
                            <FcGoogle style={{height: '2rem', width: '3rem'}} className='google'/>
                        </div>
                        <div>
                            <p>React</p>
                            <SiReact style={{height: '2rem', width: '3rem'}} className='react' />
                        </div>
                        <div>
                            <p>NodeJS</p>
                            <IoLogoNodejs style={{height: '2rem', width: '3rem'}} className='node' />
                        </div>
                        <div>
                            <p>Bootstrap</p>
                            <FaBootstrap style={{height: '2rem', width: '3rem'}} className='bootstrap'/>
                        </div>
                    </div>
                    <ul>
                        <li><a className={props.toggle ? "LinkNight Github" : "Link Github"} href="https://github.com/lucas9121/roaming-food-trucks" target="_blank" rel="noreferrer"><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                        <li><a className={props.toggle ? "LinkNight" : "Link"} href="https://roaming-spoon.herokuapp.com/" target="_blank" rel="noreferrer"><FaTruck style={{height: '2rem', width: '3rem'}} id='unit4'/></a></li>
                    </ul>
                </div>
            </article>
            <article className="my-projects">
                    <ImageSlider images={WOVImages} />
                <div className="game-description">
                    <h1>Wars of Vogrora</h1>
                    <p><span id="WOV">W</span>ars of Vogrora is a RPG turn-style game built using vanila JS. Create a character and join in the fight to save your planet from the forces of evil. Buy potions in the store to increase your attack and defense. Click on the work button to earn money in exchange for energy. Click on the eat button to replenish energy by using money.</p>
                    <div className="tech">
                        <div>
                            <p>HTML</p>
                            <AiOutlineHtml5 style={{height: '2rem', width: '3rem'}} className='html' />
                        </div>
                        <div>
                            <p>CSS</p>
                            <FaCss3Alt style={{height: '2rem', width: '3rem'}} className='css' />
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <IoLogoJavascript style={{height: '2rem', width: '3rem'}} className='js-sq' />
                        </div>
                        <div>
                            <p>Photoshop</p>
                            <SiAdobephotoshop style={{height: '2rem', width: '3rem'}} className='ps'/>
                        </div>
                    </div>
                    <ul>
                        <li><a className={props.toggle ? "LinkNight Github" : "Link Github"} href="https://github.com/lucas9121/Wars-of-Vogrora" target="_blank" rel="noreferrer"><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                        <li><a className={props.toggle ? "LinkNight" : "Link"} href="https://lucas9121.github.io/Wars-of-Vogrora/" target="_blank" rel="noreferrer"><FaDungeon style={{height: '2rem', width: '3rem'}} id='unit1'/></a></li>
                    </ul>
                </div>
            </article>
            {/* <img src='/images/GH/GH2.png' /> */}
        </div>
    )
}