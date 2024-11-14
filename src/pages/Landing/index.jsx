import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { 
  profileData, 
  experienceData, 
  educationData,
  certificationData,
  projectsData,
} from '../../global/data'
import { 
  ExperienceCell, 
  EducationCell, 
  ProjectCell 
} from '../../components'
import resume from '../../assets/resume.pdf'
import './styles.scss'
import CertificationCell from '../../components/CertificationCell';

export default function LandingPage() {
	return (
		<div id='landing-page' className='col page-container'>
      <div className='header col'>
        <h1>{profileData.name}</h1>
        <h2>{`${profileData.role} at ${profileData.company}`}</h2>
        <p>{profileData.contact.email}</p>
        <div className='links row'>
          <Link to={profileData.links.linkedIn} target='_blank'><FaLinkedin /></Link>
          <Link to={profileData.links.gitHub} target='_blank'><FaGithub /></Link>
        </div>
      </div>
      {/* About */}
      <div className='section col'>
        <div className='text-image-container col'>
          <div className='overlay'>
            <img src={profileData.avatar} />
          </div>
          <p className='bio'>{profileData.bio}</p>
        </div>
      </div>
      {/* Experience */}
      <div className='section col'>
        <p className='subtitle'>Experience</p>
        <Link to={resume} target="_blank" rel="noopener noreferrer">View Resume</Link>
        <div className='col'>
          {experienceData.map((experience, index) => (
            <ExperienceCell key={index} experience={experience} />
          ))}
        </div>
      </div>
      {/* Education */}
      <div className='section col'>
        <p className='subtitle'>Education</p>
        <div className='col'>
          {educationData.map((education, index) => (
            <EducationCell key={index} education={education} />
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className='section col'>
        <p className='subtitle'>Certifications</p>
        <div className='col'>
          {certificationData.map((certification, index) => (
            <CertificationCell key={index} certification={certification} />
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className='section col'>
        <p className='subtitle'>Featured Projects</p>
        <Link to='/projects'>View More</Link>
        {/* <div className='projects-container col'>
          {featuredProjectsData.map((project, index) => (
            <FeaturedProjectCell key={index} project={project} />
          ))}
        </div> */}
        <ul className='projects-list'>
          {projectsData.filter(p => p.isFeatured).map((project, index) => 
            <li className='project' key={index}><ProjectCell project={project} /></li>
          )}
        </ul>
      </div>
    </div>
	)
}