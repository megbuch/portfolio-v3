import { Link } from 'react-router-dom'
import './styles.scss'

export default function ProjectCell(props) {
  const { project } = props

  return (
    <div className='project-cell-comp col'>
      <p className='name'>{project.name}</p>
      <p>{project.description}</p>
      <div className='row links'>
        <Link to={project.githubLink} target='_blank'>GitHub</Link>
        {project.deployed && <Link to={project.deployedLink} target='_blank'>Live Preview</Link>}
      </div>
      <img src={project.image} />
    </div>
  )
}