import './About.css'

export default function About({toggle}){
    return(
        <div id="About" className={toggle ? 'dark' : "light"}>
            <h2 className={toggle ? 'dark-mode' : ""}>About me</h2>
            <article id="AboutMe">
                <div id="About-description">
                    <div>
                        <h3 className={toggle ? 'about-title dark-mode' :'about-title'}>Who I am</h3>
                        <p>
                            I'm a full-stack software engineer with diverse experiences in criminal justice and education, which have shaped my approach to problem-solving and my dedication to creating impactful solutions for users. My work revolves around building functional and intuitive web applications. Whether it's designing seamless user interfaces or architecting robust backend systems, I'm driven by a love for turning ideas into reality. You can see some of my work in the Projects section. 
                        </p>
                        <p>
                            At my core, I thrive on challenges and enjoy exploring innovative solutions to complex problems. Whether it's building feature-rich applications or streamlining processes for efficiency, I'm always eager to learn and grow. I find great joy in continually expanding my skill set and embracing new technologies.
                        </p>
                        <p>
                            I firmly believe that a well-rounded individual brings depth to any team, and I'm committed to bringing that same energy and dedication to my role as a software engineer. If you're seeking a motivated developer who is dedicated to creating user-friendly solutions, I'd love to chat about how I can contribute to your team. Thanks for stopping by my portfolio, and I'm excited to connect with you soon.
                        </p>
                    </div>
                    <div id="skills">
                        <h3 className={toggle ? 'about-title dark-mode' :'about-title'}>Skills</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Github Pages</li>
                            <li>MongoDb</li>
                            <li>Express</li>
                            <li>Git</li>
                            <li>Rest API</li>
                            <li>NPM</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>MVC</li>
                            <li>Postman</li>
                            <li>Bootstrap</li>
                            <li>Heroku</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                </div>

            </article>
        </div>
    )
}