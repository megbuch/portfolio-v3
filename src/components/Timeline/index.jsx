import { TimelineItem } from '../'

export default function Timeline(props) {
	const { items, cell: Cell } = props

	return (
		<div className='timeline'>
			{items.map((item, index) => (
				<TimelineItem
					key={index}
					date={item.date}
					isCurrent={index === 0}
				>
					<Cell item={item} />
				</TimelineItem>
			))}
		</div>
	)
}
