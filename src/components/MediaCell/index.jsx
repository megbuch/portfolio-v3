import { Link } from 'react-router-dom'
import { FaLink } from 'react-icons/fa'
import './styles.scss'

export default function MediaCell(props) {
  const { media: m } = props

  return (
    <div className='media-cell-comp col'>
      <h4>{m.project}</h4>
      <ul className='sources-container col'>
        {m.sources.map((s, index) => (
          <li key={index}>
            <p>{s.project}</p>
            <p className='title'>{s.title}</p>
            <Link to={s.link} target='_blank'>{s.link.split('/')[2]} <span className='link-icon'><FaLink /></span></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}