import { Link } from 'react-router-dom'

export default function CertificationCell(props) {
  const { certification: c } = props

  return (
    <div className='certification-cell-comp col'>
      <h4 className='name'>{c.name}</h4>
      <p>{c.issuer}</p>
      {c.link && <Link to={c.link}>{c.link.split('/')[2]}↗</Link>}
    </div>
  )
}