import './styles.scss'

export default function Divider(props) {
	const { transparent } = props

	return <div className={`divider-comp ${transparent && 'transparent'}`} />
}
