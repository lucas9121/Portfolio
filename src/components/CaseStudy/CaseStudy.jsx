import './CaseStudy.css'
import { useParams, Link } from 'react-router-dom'
import myProjectsData from '../Projects/MyProjectsData'

export default function CaseStudy ({toggle}){
  const {name} = useParams()

  const findProject = () => {
    return myProjectsData.projects.find((project) => project.name.toLowerCase() === name.toLowerCase())
  }

  const optimizeImage = (imageUrl) => {
        const optimizedUrl = imageUrl + "?w=1000&h=800&q=85";
        return optimizedUrl;
    };

  const { description, tech, projectLink, liveLink, images} = findProject()

  return (  
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
  )
}
