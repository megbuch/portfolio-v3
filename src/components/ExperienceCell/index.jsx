import './styles.scss'

export default function ExperienceCell(props) {
  const {experience: e} = props

  return (
    <div className='experience-cell-comp col'>
      <div className='col content-ctr'>
        <div>
          <p className='company'>{e.company}</p>
          {e?.roles?.map(r => (
            <>
              <p className='title'>{r.title}</p>
              <p className='date'>{r.date}</p>
            </>
          ))}
        </div>
        <p>{e.location}</p>
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
      </div>
    </div>
  )
}