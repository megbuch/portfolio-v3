import { useState, useEffect, useMemo } from 'react'
import { ProjectCell, Button } from '../../components'
import data from '../../data.json'
import './styles.scss'

export default function ProjectsPage() {
  const [projects, setProjects] = useState(data.projects)
  const [query, setQuery] = useState('')
  const sortedProjects = useMemo(() => {
    return projects.sort((a,b) => a.name.localeCompare(b.name))
  }, [projects])

  useEffect(() => {
    if (!query) return
    const formattedQuery = query.toLowerCase().trim()
    const filtered = data.projects.filter(p => p.name.toLowerCase().includes(formattedQuery)
    || p.platform.toLowerCase().includes(formattedQuery)
    || p.technologies.some(t => t.toLowerCase().includes(formattedQuery)))
    setProjects(filtered)
  }, [query])
  
  const clearQuery = () => {
    setQuery('')
    setProjects(data.projects)
  }

  return (
    <div id='projects-page' className='col page-container'>
      <div className='col header'>
        <h1>Projects</h1>
          <div className='col'>
            <p>Search by name, platform, or technology</p>
            <div className='row search-container'>
              <input className='searchbar' type='text' value={query} onChange={e=>setQuery(e.target.value)}/>
              <Button onClick={clearQuery}>Clear</Button>
            </div>
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