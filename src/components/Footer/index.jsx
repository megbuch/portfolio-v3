import { Link } from 'react-router-dom'
import data from '../../data.json'
import './styles.scss'

export default function Footer() {
  return (
    <div className='footer-comp col'>
      <div className='links row'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to={data.profile.github} target='_blank'>GitHub</Link>
        <Link to={data.profile.linkedIn} target='_blank'>LinkedIn</Link>
      </div>
      <p className='project-description'>Built in Visual Studio Code using React. Color palette inspired by Pantone's 2026 Color of the Year, Cloud Dancer. Font family is Mulish.</p>
    </div>
  )
}