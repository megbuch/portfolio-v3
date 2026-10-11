import data from '../../data.json'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import headshot from '/assets/headshot.jpg'
import './styles.scss'

export default function Profile() {
	const { profile } = data

	return (
		<div className='profile-comp col'>
			<div className='content-container col'>
				<div className='about-and-image-container row'>
					<div className='col'>
						<h1 className='name'>{profile.name}</h1>
						<p className='current-role'>
							{profile.role} · {profile.company}
						</p>
					</div>
					<div className='image-container'>
						<img src={headshot} />
					</div>
				</div>
				<p>{profile.headline}</p>
				<div className='buttons-container row'>
					{/* <Button>View Resume</Button> */}
					<Link
						className='social-link row'
						to={profile.linkedIn}
						target='_blank'
					>
						<FaLinkedinIn />
					</Link>
					<Link
						className='social-link row'
						to={profile.github}
						target='_blank'
					>
						<FaGithub />
					</Link>
				</div>
			</div>
			<div className='horizontal-divider' />
			<div className='highlights-container row'>
				<div className='col'>
					<p className='value'>3+</p>
					<p>YoE</p>
				</div>
				<div className='vertical-divider' />
				<div className='col'>
					<p className='value'>Web + Mobile</p>
					<p>production apps</p>
				</div>
				<div className='vertical-divider' />
				<div className='col'>
					<p className='value'>AWS</p>
					<p>certified</p>
				</div>
			</div>
		</div>
	)
}
