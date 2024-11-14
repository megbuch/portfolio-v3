import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { projectsData } from '../../global/data'
import { ProjectCell } from '../../components'

export default function ProjectsPage() {
    return (
      <div id='projects-page' className='col page-container'>
        <div className='row'>
          <Link to='/' className='back-icon'><IoArrowBackOutline /></Link>
          <h1>Projects</h1>
        </div>
        <ul className='projects-list'>
          {projectsData.map((project, index) => 
            <li className='project' key={index}><ProjectCell project={project} /></li>
          )}
        </ul>
      </div>
    )
}