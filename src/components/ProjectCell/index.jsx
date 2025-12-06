import { Link } from 'react-router-dom'
import './styles.scss'

export default function ProjectCell(props) {
  const { project: p } = props

  const getDeployedLinkText = () => {
    if (p.platform === 'iOS') return 'App Store';
    if (p.platform === 'Android') return 'Play Store';
    return 'Website';
  };

  return (
    <div className='project-cell-comp col'>
      <h4>{`${p.name} - ${p.platform}`}</h4>
      <div className='info-container row'>
        <p>{p.technologies.sort().join(', ')}</p>
        <p>{p.isWorkProject ? 'Work' : 'Personal'}</p>
      </div>
      <p>{p.description}</p>
      <div className='row links'>
        {p.deployedLink && <Link to={p.deployedLink} target='_blank'>{getDeployedLinkText()}</Link>}
        {p.githubLink && <Link to={p.githubLink} target='_blank'>GitHub</Link>}
      </div>
      <img src={`/assets/${p.image}`} />
    </div>
  )
}