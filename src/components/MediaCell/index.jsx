import { Link } from 'react-router-dom'
import { FaLink } from 'react-icons/fa'
import './styles.scss'

export default function MediaCell(props) {
  const { media: m } = props

  return (
    <div className='media-cell-comp col'>
      <h4>{m.project}</h4>
      <ul className='small-list col'>
        {m.sources.map((s, index) => (
          <li key={index}>
            <div className='source-content-container row'>
              <p>{s.source}<span className='title'>, {s.title}</span></p>
              <p>{s.year}</p>
            </div>
            <Link to={s.link} target='_blank'>{s.link.split('/')[2]} <span className='link-icon'><FaLink /></span></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}