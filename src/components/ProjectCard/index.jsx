import { Link } from 'react-router-dom'
import './styles.scss'

export default function ProjectCell(props) {
  const { project } = props

  return (
    <div className='project-card-comp'>
      <div className='splash-container'>
        <div className='overlay'></div>
        <img src={project.image} />
      </div>
      <div className='expanded-section col'>
        <p className='name'>{project.name}</p>
        <p>{project.description}</p>
        <div className='technologies row'>
          {project.technologies.sort().map((technology, index) => (
            <div key={index}>{technology}</div>
          ))}
        </div>
        <div className='row links'>
          <Link to={project.deployedLink} target='_blank'>Preview</Link>
          <Link to={project.githubLink} target='_blank'>GitHub</Link>
        </div>
      </div>
    </div>
  )
}
