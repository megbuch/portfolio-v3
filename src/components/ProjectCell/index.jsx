import { Link } from 'react-router-dom'
import './styles.scss'

export default function ProjectCell(props) {
  const { project: p } = props

  return (
    <div className='project-cell-comp col'>
      <p className='name'>{p.name}</p>
      <p>{p.description}</p>
      <div className='row links'>
        <Link to={p.githubLink} target='_blank'>GitHub</Link>
        {p.deployed && <Link to={p.deployedLink} target='_blank'>Live Preview</Link>}
      </div>
      <img src={p.image} />
    </div>
  )
}