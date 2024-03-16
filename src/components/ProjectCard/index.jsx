import './styles.scss'
// When clicked, bottom expands/slides out to display more info.
// Expandable cell. Initially, displays as a banner image with a title overlay

export default function ProjectCell(props) {
  const { project } = props

  return (
    <div className='project-card-comp'>
      <div className='overlay'></div>
      <img src={project.image} />
      <p>{project.name}</p>
    </div>
  )
}
