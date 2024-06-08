import { Link } from 'react-router-dom'
import './styles.scss'

export default function ProjectCell(props) {
  const { project } = props

  return (
    <div className='project-cell-comp col'>
      <p className='name'>{project.name}</p>
      <p className='subtitle-sm'>{project.description}</p>
      <div className='row links'>
        {project.deployed 
          ? <Link to={project.deployedLink} target='_blank'>Preview</Link>
          : <p className='subtitle-sm'>Project not deployed</p>
        }
        <Link to={project.githubLink} target='_blank'>GitHub</Link>
      </div>
      <img src={project.image} />
    </div>
  )
}