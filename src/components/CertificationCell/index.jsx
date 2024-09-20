import './styles.scss'

export default function CertificationCell(props) {
  const { certification: c } = props

  return (
    <div className='certification-cell-comp'>
      <p className='name'>{c.name}</p>
      <p>{c.issuer}</p>
      <p>{`Valid ${c.issueDate} - ${c.expirationDate}`}</p>
    </div>
  )
}