import { Link } from 'react-router-dom'
import './styles.scss'

export default function ExperienceCard(props) {
  const {experience: e} = props

  return (
    <Link to={e.website} target='_blank'>
      <div className='experience-card-comp row'>
        <p className='date'>{e.date}</p>
        <div className='col content-ctr'>
          <div>
            <p className='company'>{e.company}</p>
            <p className='title'>{e.title}</p>
          </div>
          <p className='subtitle-sm'>{e.location}</p>
          <ul className='col'>
            {e.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
          <div className='technologies row'>
            {e.technologies.sort().map((technology, index) => (
              <div key={index}>{technology}</div>
            ))}
          </div>
          {}
        </div>
      </div>
    </Link>
  )
}