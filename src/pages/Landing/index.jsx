import { Link } from 'react-router-dom'
import ExperienceCell from '../../components/ExperienceCell'
import FeaturedProjectCell from '../../components/FeaturedProjectCell'
import { experiences, featuredProjects, profile } from '../../global/data'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles.scss'

export default function LandingPage() {
	return (
		<div id='landing-page' className='col page-container'>
      <div className='header col'>
        <h1>{profile.name}</h1>
        <h2>{`${profile.role} at ${profile.company}`}</h2>
        <p>{profile.contact.email}</p>
        <div className='links row'>
          <Link to={profile.links.linkedIn} target='_blank'><FaLinkedin /></Link>
          <Link to={profile.links.gitHub} target='_blank'><FaGithub /></Link>
        </div>
      </div>
      {/* About Section */}
      <div className='section col'>
        <p className='subtitle'>About</p>
        <div className='text-image-container col'>
          <div className='overlay'>
            <img src={profile.avatar} />
          </div>
          <p className='bio'>{profile.bio}</p>
        </div>
      </div>
      {/* Experience Section */}
      <div className='section col'>
        <p className='subtitle'>Experience</p>
        <p>View Resume</p>
        <div className='col'>
          {experiences.map((experience, index) => (
            <ExperienceCell key={index} experience={experience} />
          ))}
        </div>

      </div>
      {/* Projects Section */}
      <div className='section col'>
        <p className='subtitle'>Featured Projects</p>
        <Link to='/projects'>View More</Link>
        <div className='projects-container col'>
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCell key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
	)
}