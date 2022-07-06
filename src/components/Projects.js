import {BsGithub, BsJoystick} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {SiMongodb, SiExpress, SiReact, SiHeroku} from 'react-icons/si'

export default function Projects(props) {
    return (
        <div id="Projects">
            <h2>My Projects</h2>
            <article class="my-projects">
                <div id="GH-picture"></div>
                <div class="game-description">
                    <h1>Gamehub</h1>
                    <p><span id="GH">G</span>amehub is a full CRUD mock online gaming store. You can browse through different game titles or search for them in the search bar. Some of the features of available include; purchasing games, writing reviews, as well as editing or deleting your reviews, creating and editing your own games and editing your account. Sign up with a Gamer or Developer account to try all of the different features the website has to offer.</p>
                    <div class="tech">
                        <div>
                            <p>HTML</p>
                            <AiOutlineHtml5 style={{height: '2rem', width: '3rem'}} />
                        </div>
                        <div>
                            <p>CSS</p>
                            <FaCss3Alt style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div>
                            <p>JavaScript</p>
                            <IoLogoJavascript style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div>
                            <p>MongoDB</p>
                            <SiMongodb style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div style="height: 30px; width: 30px;">
                            <p>ExpressJs</p>
                            <SiExpress style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div>
                            <p>React</p>
                            <SiReact style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div>
                            <p>NodeJS</p>
                            <IoLogoNodejs style={{height: '2rem', width: '3rem'}}/>
                        </div>
                        <div style="height: 30px; width: 30px;">
                            <p>Heroku</p>
                            <SiHeroku style={{height: '2rem', width: '3rem'}}/>
                        </div>
                    </div>
                    <ul>
                        <li><a class="Link" href="https://github.com/lucas9121/Gamehub" target="_blank"><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                        <li><a class="Link" href="https://gamehub-react.herokuapp.com/games" target="_blank"><BsJoystick style={{height: '2rem', width: '3rem'}} /></a></li>
                    </ul>
                </div>
            </article>
        </div>
    )
}