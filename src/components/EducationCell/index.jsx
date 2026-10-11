import './styles.scss'

export default function EducationCell(props) {
	const { item: education } = props

	return (
		<div className='education-cell-comp col'>
			<h3>{education.school}</h3>
			<p>{education.degree}</p>
		</div>
	)
}
