import './styles.scss'

export default function EducationCell(props) {
  const { education: e } = props

  return (
    <div className='education-cell-comp'>
      <p className='degree'>{e.degree}</p>
      <p>{e.school}</p>
      <p>{e.graduationDate}</p>
      {e?.notes && <p>{e.notes}</p>}
    </div>
  )
}