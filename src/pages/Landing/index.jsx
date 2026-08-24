import { useNavigate } from 'react-router-dom'
import { ExperienceCell, EducationCell, CertificationCell, MediaCell, ProjectCell, SocialLinks, Button } from '../../components'
import headshot from '/assets/headshot.jpg'
import data from '../../data.json'
import './styles.scss'

export default function LandingPage() {
  const navigate = useNavigate()
  const featuredProjects = data.projects.filter(p => p.isFeatured).sort((a,b) => a.name.localeCompare(b.name))
	
  return (
    <div className='col landing-page page-container'>
      <div className='section row profile'>
        <div className='image-container'>
          <img src={headshot} />
        </div>
        <div className='content-container col'>
          <h1>Meghan Bucher</h1>
          <p className='headline'>{data.profile.headline}</p>
          <SocialLinks />
        </div>
      </div>
      <div className='divider' />
      <div className='section col'>
        <h2>Experience</h2>
        <ul className='col list'>
          {data.experience.map((experience, index) => (
            <li key={index}><ExperienceCell experience={experience} /></li>
          ))}
        </ul>
      </div>
      <div className='divider' />
      <div className='section col media'>
        <h2>Media</h2>
        <ul className='list'>
          {data.media.map((m, index) => (
            <li key={index}><MediaCell media={m} /></li>
          ))}
        </ul>
      </div>
      <div className='divider' />
      <div className='section col education'>
        <div className='schools-subsection col'>
          <h2>Education</h2>
          <ul className='small-list'>
            {data.education.map((education, index) => (
              <li key={index}><EducationCell education={education} /></li>
            ))}
          </ul>
        </div>
        <div className='certifications-subsection col'>
          <h2>Certifications</h2>
          <ul className='small-list'>
            {data.certificates.map((certification, index) => (
              <li key={index}><CertificationCell certification={certification} /></li>
            ))}
          </ul>
        </div>
      </div>
      <div className='divider' />
      <div className='section col featured-projects'>
        <h2>Featured Projects</h2>
        <ul className='projects-list'>
          {featuredProjects.map((project, index) => 
            <li className='project' key={index}><ProjectCell project={project} /></li>
          )}
        </ul>
      </div>
      <Button onClick={()=>navigate('/projects')}>View More</Button>
    </div>
	)
}