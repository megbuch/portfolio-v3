import { Link } from 'react-router-dom'
import { FaLink } from 'react-icons/fa'
import './styles.scss'

export default function ProjectCell(props) {
  const { project: p } = props

  return (
    <div className='project-cell-comp col'>
      <h4>{`${p.name} - ${p.platform}`}</h4>
      <p>{p.description}</p>
      <div className='row links'>
        {p.link && <Link to={p.link} target='_blank'>{p.link.split('/')[2]} <span className='link-icon'><FaLink /></span></Link>}
      </div>
      <div className='technologies row'>
        {p.technologies.sort().map((technology, index) => (
          <div key={index}>{technology}</div>
        ))}
      </div>
      {p.image &&
        <div className='image-container'>
          <img src={`/assets/${p.image}`} />
        </div>
      }
    </div>
  )
}