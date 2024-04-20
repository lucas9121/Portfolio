import './CaseStudy.css'

export default function CaseStudy (){
  return myHtml
}


const myHtml =  
<div>
  <section className="project-cs-hero">
    <div className="project-cs-hero-content">
      <h1 className="heading-primary">Gamehub</h1>
      <div className="project-cs-hero-info">
        <p className="text-primary">
          Welcome to the case study of Gamehub website. Here, you'll find a detailed overview of the project, including its features, the technologies used, and live links to both the website and code repository.
        </p>
      </div>
      <div className="project-cs-hero-cta">
        <a href="https://gamehub-react.herokuapp.com/" className="btn btn-bg" target="_blank" rel="noopener noreferrer">Live Link</a>
      </div>
    </div>
  </section>
  <section className="project-details">
    <div className="main-container">
      <div className="project-details-content">
        <div className="project-details-showcase-img-cont">
          <img
            // src="../assets/jpeg/project-mockup-example.jpeg"
            alt="Project Image"
            className="project-details-showcase-img"
          />
        </div>
        <div className="project-details-content-main">
          <div className="project-details-desc">
            <h3 className="project-details-content-title">Project Overview</h3>
            <p className="project-details-desc-para">
              Gamehub is a personal project developed to showcase proficiency in the MERN stack. Inspired by platforms like Steam, I aimed to create a similar experience while adding unique functionalities. As a single-page application (SPA), Gamehub simulates an online store for video games, providing users with a platform to browse, explore, and interact with game listings. Leveraging React for the front-end and Express.js for the back-end, Gamehub implements robust user authentication using JSON Web Tokens (JWT) and ensures secure password hashing with bcrypt. MongoDB serves as the database, facilitating dynamic inventory management through change streams, allowing real-time updates to game availability.
            </p>
            <p className="project-details-desc-para">
              Key features of Gamehub include an interactive game catalog, user account management with distinct privileges for gamers and developers, and responsive cart functionality for seamless browsing and purchasing experiences. The platform prioritizes usability and responsiveness, with an intuitive interface designed to guide users through the browsing and purchasing process effortlessly. Throughout the development process, my biggest struggle and reward was building the search bar and logic from scratch, a challenge that ultimately contributed to the platform's unique functionality and my growth as a developer.
            </p>
            <p className="project-details-desc-para">
              I invite you to explore Gamehub and experience the culmination of my efforts. Building this project has been an immensely rewarding journey, and I'm excited to share it with you. You can visit the Live link for the website or check out the code by clicking on the Code Link.
            </p>
          </div>
          <div className="project-details-tools-used">
            <h3 className="project-details-content-title">Tools Used</h3>
            <div className="skills">
              <div className="skills-skill">HTML</div>
              <div className="skills-skill">CSS</div>
              <div className="skills-skill">JavaScript</div>
              <div className="skills-skill">React</div>
              <div className="skills-skill">MongoDB</div>
              <div className="skills-skill">ExpressJS</div>
              <div className="skills-skill">NodeJS</div>
              <div className="skills-skill">GIT</div>
              <div className="skills-skill">Heroku</div>
            </div>
          </div>
          <div className="project-details-links">
            <h3 className="project-details-content-title">See Live</h3>
            <a
              href="https://gamehub-react.herokuapp.com/"
              className="btn btn-med btn-theme project-details-links-btn"
              target="_blank"
              rel="noopener noreferrer"
              >Live Link</a
            >
            <a
              href="https://github.com/lucas9121/Gamehub"
              className="btn btn-med btn-theme-inv project-details-links-btn"
              target="_blank"
              rel="noopener noreferrer"
              >Code Link</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



