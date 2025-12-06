import './styles.scss'

export default function EducationCell(props) {
  const { education: e } = props

  return (
    <div className='education-cell-comp row'>
      <div className='col'>
        <h4>{e.degree}</h4>
        <p>{e.school}</p>
      </div>
      <p>{e.graduationDate}</p>
    </div>
  )
}