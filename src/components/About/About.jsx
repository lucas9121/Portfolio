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
                        <p>I’m a software engineer with a passion for problem-solving and building functional web applications. With a background in both the criminal justice and education fields, I bring a unique perspective to software engineering and a commitment to creating solutions that help people. </p>
                        <p>I have experience in HTML, CSS, JavaScript, and React, and I'm skilled in building dynamic and interactive web applications that provide users with a seamless experience. I'm also proficient in back-end web development technologies such as Node.js, Express.js, and MongoDB, which enables me to build and manage databases and create robust, scalable web applications.
                            As a problem-solver at heart, I enjoy taking on new challenges and finding creative solutions to complex problems. Whether it's building a feature-rich web application or optimizing code for maximum efficiency, I'm always striving to learn and improve my skills. 
                        </p>
                        <p>When I'm not coding, you can find me playing the piano or video games, or volunteering for causes I'm passionate about. I believe that a well-rounded individual is an asset in any workplace, and I bring that same level of dedication and passion to my work as a software engineer.</p>
                        <p>If you're looking for a skilled and motivated software engineer who is committed to creating functional and user-friendly web applications, I'd love to talk to you about how I can contribute to your team. Thank you for visiting my portfolio, and I look forward to connecting with you soon.</p>
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