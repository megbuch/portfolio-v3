import './styles.scss'

export default function ExperienceCell(props) {
	const { item: experience } = props

	return (
		<div className='experience-cell-comp col'>
			<div className='col'>
				<h3>{experience.company}</h3>
				<h4>{experience.title}</h4>
				{experience.previousTitles.length > 0 && (
					<p className='caption'>{`Previous: ${experience.previousTitles.join(', ')}`}</p>
				)}
			</div>
			<p>{experience.description}</p>
			<div className='technologies-list row'>
				{experience.technologies.sort().map((technology, index) => (
					<div key={index} className='technology-tag'>
						{technology}
					</div>
				))}
			</div>
		</div>
	)
}
