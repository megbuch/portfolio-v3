import './styles.scss'

export default function Divider(props) {
	const { title } = props

	return (
		<div className='divider-comp row'>
			<div className='left' />
			{title && <h2>{title}</h2>}
			<div className='right' />
		</div>
	)
}
