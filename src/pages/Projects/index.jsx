import { useState, useEffect, useMemo } from 'react'
import { ProjectCell } from '../../components'
import data from '../../data.json'
import './styles.scss'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(data.projects)
  const [query, setQuery] = useState('')
  const sortedProjects = useMemo(() => {
    return projects.sort((a,b) => a.name.localeCompare(b.name))
  }, [projects])

  useEffect(() => {
    const lowercasedQuery = query.toLowerCase()
    const filtered = data.projects.filter(p => p.name.toLowerCase().includes(lowercasedQuery)
      || p.platform.toLowerCase().includes(lowercasedQuery)
      || p.technologies.some(t => t.toLowerCase().includes(lowercasedQuery)))
    setProjects(filtered)
  }, [query])

  return (
    <div id='projects-page' className='col page-container'>
      <div className='col header'>
        <h1>Projects</h1>
        <div className='col'>
          <p>Search by name, platform, or technology</p>
          <input type='text' onChange={e=>setQuery(e.target.value)}/>
        </div>
      </div>
      <ul className='projects-list'>
        {sortedProjects.map((project, index) => 
          <li className='project' key={index}><ProjectCell project={project} /></li>
        )}
      </ul>
    </div>
  )
}