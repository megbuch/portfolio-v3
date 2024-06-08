import { Link } from 'react-router-dom'
import { profile } from '../../global/data'
import './styles.scss'

export default function Footer() {
  return (
    <div className='footer-comp col'>
      <div className='links row'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to={profile.links.gitHub} target='_blank'>GitHub</Link>
        <Link to={profile.links.linkedIn} target='_blank'>LinkedIn</Link>
      </div>
      <p className='subtitle-sm'>Created by Meghan Bucher © 2024</p>
      <p className='subtitle-sm'>hiremeghanbucher@gmail.com</p>
    </div>
  )
}