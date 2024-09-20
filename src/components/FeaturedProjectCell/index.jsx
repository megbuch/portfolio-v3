import { Link } from 'react-router-dom'
import './styles.scss'

export default function FeaturedProjectCell(props) {
  const { project: p } = props

  return (
    <div className='featured-project-cell-comp'>
      <div className='splash-container'>
        <div className='overlay'></div>
        <img src={p.image} />
      </div>
      <div className='expanded-section col'>
        <p className='name'>{p.name}</p>
        <p>{p.description}</p>
        <div className='technologies row'>
          {p.technologies.sort().map((technology, index) => (
            <div key={index}>{technology}</div>
          ))}
        </div>
        <div className='row links'>
          <Link to={p.githubLink} target='_blank'>GitHub</Link>
          {p.deployed && <Link to={p.deployedLink} target='_blank'>Live Preview</Link>}
        </div>
      </div>
    </div>
  )
}
