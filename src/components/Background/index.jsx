import './styles.scss'

export default function Background() {
  const colorBlobs = [
    { size: 300, top: '5%', left: '-5%', color: 'var(--color-background-blobs)' },
    { size: 500, top: '20%', left: '50%', color: 'var(--color-background-blobs)' },
    { size: 300, top: '60%', left: '80%', color: 'var(--color-background-blobs)' },
    { size: 800, top: '80%', left: '5%', color: 'var(--color-background-blobs)' },
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