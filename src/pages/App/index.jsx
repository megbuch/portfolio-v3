import { Routes, Route } from 'react-router-dom'
import LandingPage from '../Landing'
import ProjectsPage from '../Projects'
import '../../styles.scss'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Routes>
  )
}

export default App
