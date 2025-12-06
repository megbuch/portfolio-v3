import { useState, useEffect, useMemo } from 'react'
import { FaCircleUser, FaBriefcase, FaSchool, FaFolder } from 'react-icons/fa6'
import './styles.scss'

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('')

  const items = useMemo(() => [
    { id: 'home', icon: <FaCircleUser /> },
    { id: 'experience', icon: <FaBriefcase /> },
    { id: 'education', icon: <FaSchool /> },
    { id: 'projects', icon: <FaFolder /> },
  ], [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveItem(entry.target.id)
      })
    })
    items.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [items])

  const scrollToSection = id => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
    setActiveItem(id)
  }

  return (
    <div className='navigation-comp row'>
      <div className='navigation-items row'>
        {items.map(item => (
          <div key={item.id} className={`item ${activeItem == item.id && 'active'}`} onClick={()=>scrollToSection(item.id)}>{item.icon}</div>
        ))}
      </div>
      <div className='side left'></div>
      <div className='side right'></div>
    </div>
  )
}