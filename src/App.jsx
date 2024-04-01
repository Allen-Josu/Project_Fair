import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
