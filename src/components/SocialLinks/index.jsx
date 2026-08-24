import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../../data.json'
import './styles.scss'

export default function SocialLinks() {
  return (
    <div className='social-links-comp row'>
      <Link className='item' to={data.profile.linkedIn} target='_blank'><FaLinkedin /></Link>
      <Link className='item' to={data.profile.github} target='_blank'><FaGithub /></Link>
    </div>
  )
}