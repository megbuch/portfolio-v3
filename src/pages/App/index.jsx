import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Landing'
import ProjectsPage from '../Projects'
import { Navigation } from '../../components'
import '../../styles.scss'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
