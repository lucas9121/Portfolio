import './About.css'

export default function About({toggle}){
    return(
        <article id="About">
            <h2>About me</h2>
            <div id="AboutMe">
                {/* <div id="About-img"></div> */}
                <img src={"/images/A881DD38-7689-4ECB-9DA3-D26DFEB03838_1_105_c.jpeg"} alt="" id="About-img" />
                <div id="About-description">
                    <div className={toggle ? "nightMode" : ""}>
                        <p>I'm a software engineer with background experience in both the criminal justice, and education field. I admire the problem-solving aspect, and versatility to create virtually anything, that the software engineer field offers. I enjoy building web apps and content that has a lot of functionality to it. </p>
                        <p>During my free time I enjoy playing the piano or playing video games online and volunteering. </p>
                    </div>
                    <div id="skills">
                        Skills:
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JSX</li>
                            <li>Github</li>
                            <li>MongoDb</li>
                            <li>ExpressJs</li>
                            <li>React</li>
                            <li>NodeJs</li>
                            <li>MVC</li>
                            <li>Postman</li>
                            <li>Bootstrap</li>
                            <li>Heroku</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>

            </div>
        </article>
    )
}