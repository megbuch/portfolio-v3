import { Link } from 'react-router-dom'
import data from '../../data.json'
import { 
  ExperienceCell, 
  EducationCell, 
  ProjectCell,
  Navigation,
} from '../../components'
import resume from '/assets/resume.pdf'
import CertificationCell from '../../components/CertificationCell';
import './styles.scss'

export default function LandingPage() {
	return (
    <>
      <Navigation />
      <div className='col landing-page page-container'>
        {/* About */}
        <div id='home' className='section header col'>
          <h1>Meghan Bucher</h1>
          <p className='role'>Front End Engineer</p>
          <p className='bio'>{data.profile.bio}</p>
        </div>
        {/* Experience */}
        <div id='experience' className='section col'>
          <h2>Experience</h2>
          <Link to={resume} target="_blank" rel="noopener noreferrer">View Resume</Link>
          <div className='col list'>
            {data.experience.map((experience, index) => (
              <ExperienceCell key={index} experience={experience} />
            ))}
          </div>
        </div>
        {/* Education/Certs */}
        <div id='education' className='section col'>
          <h2>Education</h2>
          <div className='list'>
            {data.education.map((education, index) => (
              <EducationCell key={index} education={education} />
            ))}
          </div>
          <h2>Certifications</h2>
          <div className='list'>
            {data.certificates.map((certification, index) => (
              <CertificationCell key={index} certification={certification} />
            ))}
          </div>
        </div>
        {/* Projects */}
        <div id='projects' className='section col'>
          <h2>Featured Projects</h2>
          <Link to='/projects'>View More</Link>
          <ul className='projects-list'>
            {data.projects.filter(p => p.isFeatured).map((project, index) => 
              <li className='project' key={index}><ProjectCell project={project} /></li>
            )}
          </ul>
        </div>
      </div>
    </>
	)
}