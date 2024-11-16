import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { projectsData } from '../../global/data'
import { ProjectCell } from '../../components'
import './styles.scss'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData)
  const filterRef = useRef(null)

  const filter = () => {
    switch(filterRef.current.value) {
      case 'all': 
        setProjects(projectsData)
        break
      case 'work': 
        setProjects(projectsData.filter(p => p.isWorkProject))
        break
      case 'personal': 
        setProjects(projectsData.filter(p => !p.isWorkProject))
        break
    }
  }

  return (
    <div id='projects-page' className='col page-container'>
      <div className='row header'>
        <div className='row'>
          <Link to='/' className='back-icon'><IoArrowBackOutline /></Link>
          <h1>Projects</h1>
        </div>
        <select ref={filterRef} onChange={filter}>
          <option default value='all'>All</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>      
        </select>
      </div>
      <ul className='projects-list'>
        {projects.map((project, index) => 
          <li className='project' key={index}><ProjectCell project={project} /></li>
        )}
      </ul>
    </div>
  )
}