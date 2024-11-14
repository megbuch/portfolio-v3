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
      <p className='header'>{`${p.name} - ${p.platform}`}</p>
      <div className='info-container row'>
        <p className='subtitle-sm'>
          {p.technologies.sort().map((technology, index) => (
            <span key={index}>
              {technology}{index < p.technologies.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <p className='subtitle'>{p.isWorkProject ? 'Work' : 'Personal'}</p>
      </div>
      <p>{p.description}</p>
      <div className='row links'>
        {p.deployedLink && <Link to={p.deployedLink} target='_blank'>{getDeployedLinkText()}</Link>}
        {p.githubLink && <Link to={p.githubLink} target='_blank'>GitHub</Link>}
      </div>
      <img src={p.image} />
      {p.storeImage && <img src={p.storeImage} />}
    </div>
  )
}