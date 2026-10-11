import './styles.scss'

export default function Divider(props) {
	const { title } = props

	return (
		<div className='divider-comp row'>
			<div className='left' />
			{title && <p>{title}</p>}
			<div className='right' />
		</div>
	)
}
