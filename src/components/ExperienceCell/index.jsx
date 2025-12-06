import './styles.scss'

export default function ExperienceCell(props) {
  const {experience: e} = props

  return (
    <div className='experience-cell-comp col'>
      <div className='col'>
        <h3>{e.company}</h3>
        <div className='role row'>
          <h4 className='title'>{e.title}</h4>
          <p className='date'>{e.date}</p>
        </div>
        {e.previousTitles.length > 0 && <p className='caption'>{`Previous: ${e.previousTitles.join(', ')}`}</p>}
      </div>
      <ul className='col list'>
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
  )
}