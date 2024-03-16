import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiCaretCircleDownDuotone, PiCaretCircleUpDuotone } from "react-icons/pi";
import './styles.scss'

export default function ProjectCell(props) {
  const [expanded, setExpanded] = useState(false)
  const { project } = props

  return (
    <div className='project-card-comp'>
      <div className='splash-container'>
        <div className='overlay'></div>
        <img src={project.image} />
        <i className='icon' onClick={()=>setExpanded(true)}>{!expanded && <PiCaretCircleDownDuotone />}</i>
      </div>
      {expanded && (
        <div className='expanded-section col'>
          <p className='name'>{project.name}</p>
          <p>{project.description}</p>
          <div className='technologies row'>
            {project.technologies.sort().map((technology, index) => (
              <div key={index}>{technology}</div>
            ))}
          </div>
          <div className='row links-container'>
            <div className='row links'>
              <Link to={project.deployedLink} target='_blank'>Preview</Link>
              <Link to={project.githubLink} target='_blank'>GitHub</Link>
            </div>
            <i className='icon' onClick={()=>setExpanded(false)}><PiCaretCircleUpDuotone /></i>
          </div>
        </div>
      )}
    </div>
  )
}
