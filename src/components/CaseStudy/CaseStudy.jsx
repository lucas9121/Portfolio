import './CaseStudy.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import myProjectsData from '../Projects/Data/ProjectsData.json'
import Footer from '../Footer/Footer'

export default function CaseStudy ({toggle}){

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const {name} = useParams()

  const findProject = () => {
    return myProjectsData.projects.find((project) => project.name.toLowerCase() === name.toLowerCase())
  }

  const optimizeImage = (imageUrl) => {
      // Extract the part of the URL after the "upload/" segment
      const urlParts = imageUrl.split("/upload/");
      
      // Add the width and height parameters to the URL
      const transformedUrl = `${urlParts[0]}/upload/w_1000,h_800/${urlParts[1]}`;
  
      return transformedUrl;
  };

  const { description, tech, projectLink, liveLink, images} = findProject()

  return (  
    <section className='content-section'>
      <div id={toggle ? "case-study-dark-mode" : "case-study-light-mode"}>
        <h2 className='case-study-name'>{name.toLowerCase()} </h2>
        {images && images.length > 0 && <img className='case-study-image' src={optimizeImage(images[0].src)} alt={`${name} image`} /> }
        {
          liveLink ? <Link to={liveLink} target="_blank" rel="noreferrer" className="case-study-btn"> Live Link </Link> : 
          <Link to={projectLink} target="_blank" rel="noreferrer" className="case-study-btn"> Project Link </Link>
        }
        <article>
          <div className="case-study-content">
            <h3 className='case-study-title'>Project Overview</h3>
            {description.split('\n').map((par, i) => (
              <p key={i}>{par}</p>
            ))}
          </div>
          <div className="case-study-tools">
            <h3 className='case-study-title'>Tools Used</h3>
            <ul className='case-study-skills'>
              {tech.split(',').map((tool, i) => (
                <li key={i}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="case-study-links">
            <h3 className="case-study-title">Code Links</h3>
            <div>
              {liveLink && <Link to={liveLink} target="_blank" rel="noreferrer" className="case-study-btn"> Live Link </Link>}
              {projectLink && <Link to={projectLink} target="_blank" rel="noreferrer" className="case-study-btn"> Project Link </Link>}
            </div>
          </div>
        </article>
      </div>
      <Footer toggle={toggle} />
    </section>
  )
}
