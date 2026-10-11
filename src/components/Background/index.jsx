import './styles.scss'

export default function Background() {
	const colorBlobs = [
		{ size: 1000, top: '-20%', left: '-20%', color: '#fff4e783' },
		{ size: 1000, top: '20%', left: '50%', color: '#cccdf785' },
		{ size: 1400, top: '70%', left: '-10%', color: '#d0e3e9' },
	]

	return (
		<div className='background-comp'>
			{colorBlobs.map((blob, index) => (
				<div
					key={index}
					className='color-blob'
					style={{
						width: blob.size,
						height: blob.size,
						top: blob.top,
						left: blob.left,
						background: blob.color,
					}}
				/>
			))}
		</div>
	)
}
