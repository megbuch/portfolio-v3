import { ExperienceCell, EducationCell, ProjectCell, CertificationCell, SocialLinks } from '../../components'
import headshot from '/assets/headshot.jpg'
import data from '../../data.json'
import './styles.scss'

export default function LandingPage() {

	return (
    <div className='col landing-page page-container'>
      <div className='section row profile'>
        <div className='image-container'>
          <img src={headshot} />
        </div>
        <div>
          <h1>Meghan Bucher</h1>
          <p>Front End Engineer</p>
        </div>
      </div>
      <div id='about' className='section col about'>
        <h2>About</h2>
        <p className='bio'>{data.profile.bio}</p>
        <SocialLinks />
      </div>
      <div className='section col'>
        <h2>Work Experience</h2>
        <div className='col list'>
          {data.experience.map((experience, index) => (
            <ExperienceCell key={index} experience={experience} />
          ))}
        </div>
      </div>
      <div className='section col education'>
        <div className='schools-subsection col'>
          <h2>Education</h2>
          <div className='list'>
            {data.education.map((education, index) => (
              <EducationCell key={index} education={education} />
            ))}
          </div>
        </div>
        <div className='certifications-subsection col'>
          <h2>Certifications</h2>
          <div className='list'>
            {data.certificates.map((certification, index) => (
              <CertificationCell key={index} certification={certification} />
            ))}
          </div>
        </div>
      </div>
      <div className='section col featured-projects'>
        <h2>Featured Projects</h2>
        <ul className='projects-list'>
          {data.projects.filter(p => p.isFeatured).map((project, index) => 
            <li className='project' key={index}><ProjectCell project={project} /></li>
          )}
        </ul>
      </div>
    </div>
	)
}