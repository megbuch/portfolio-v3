import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { ProjectCell } from '../../components'
import data from '../../data.json'
import './styles.scss'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(data.projects)
  const filterRef = useRef(null)

  const filter = () => {
    switch(filterRef.current.value) {
      case 'all': 
        setProjects(data.projects)
        break
      case 'work': 
        setProjects(data.projects.filter(p => p.isWorkProject))
        break
      case 'personal': 
        setProjects(data.projects.filter(p => !p.isWorkProject))
        break
    }
  }

  return (
    <div id='projects-page' className='col page-container'>
      <div className='row header'>
        <h1>Projects</h1>
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