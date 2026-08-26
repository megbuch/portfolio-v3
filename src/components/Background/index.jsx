import './styles.scss'

export default function Background() {
  const colorBlobs = [
    { size: 300, top: '5%', left: '-5%', color: '#ffede7' },
    { size: 1000, top: '20%', left: '50%', color: '#cccdf7' },
    { size: 800, top: '80%', left: '-20%', color: '#d0e3e9' },
  ]

  return (
    <div className='background-comp'>
      {colorBlobs.map((blob, index) => (
        <div key={index} className='color-blob' style={{
          width: blob.size,
          height: blob.size,
          top: blob.top,
          left: blob.left,
          background: blob.color
        }} />
      ))}
    </div>
  )
}