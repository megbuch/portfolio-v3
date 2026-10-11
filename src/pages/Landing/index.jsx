import { useNavigate } from 'react-router-dom'
import {
	Profile,
	ExperienceCell,
	EducationCell,
	CertificationCell,
	ProjectCell,
	Button,
	Divider,
	Timeline,
} from '../../components'
import data from '../../data.json'
import './styles.scss'

export default function LandingPage() {
	const navigate = useNavigate()
	const featuredProjects = data.projects
		.filter((p) => p.isFeatured)
		.sort((a, b) => a.name.localeCompare(b.name))

	return (
		<div className='col landing-page page-container'>
			<Profile />
			<Divider title='Experience' />
			<div className='section col'>
				<Timeline items={data.experience} cell={ExperienceCell} />
			</div>
			<Divider title='Education' />
			<div className='section col'>
				<Timeline items={data.education} cell={EducationCell} />
			</div>
			<Divider title='Certifications' />
			<div className='section col'>
				<ul className='certifications-list col'>
					{data.certificates.map((certification, index) => (
						<li key={index}>
							<CertificationCell certification={certification} />
						</li>
					))}
				</ul>
			</div>
			<Divider title='Featured Projects' />
			<div className='section col featured-projects'>
				<ul className='projects-list'>
					{featuredProjects.map((project, index) => (
						<li className='project' key={index}>
							<ProjectCell project={project} />
						</li>
					))}
				</ul>
			</div>
			<Button onClick={() => navigate('/projects')}>View More</Button>
		</div>
	)
}
