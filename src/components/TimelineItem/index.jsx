import './styles.scss'

export default function TimelineItem(props) {
	const { date, children, isCurrent } = props

	return (
		<div className='timeline-item-comp'>
			<div className='date'>{date}</div>
			<div className='rail col'>
				<span className={`dot ${isCurrent && 'current'}`} />
			</div>
			<div className='item'>{children}</div>
		</div>
	)
}
