import './styles.scss'

export default function ExperienceCell(props) {
	const { experience: e } = props

	return (
		<div className='experience-cell-comp col'>
			<div className='col'>
				<h3>{e.company}</h3>
				<div className='title-container row'>
					<h4 className='title'>{e.title}</h4>
					<p className='date'>{e.date}</p>
				</div>
				{e.previousTitles.length > 0 && (
					<p className='caption'>{`Previous: ${e.previousTitles.join(', ')}`}</p>
				)}
			</div>
			<p>{e.description}</p>
			<div className='technologies-list row'>
				{e.technologies.sort().map((technology, index) => (
					<div key={index} className='technology-tag'>
						{technology}
					</div>
				))}
			</div>
		</div>
	)
}
