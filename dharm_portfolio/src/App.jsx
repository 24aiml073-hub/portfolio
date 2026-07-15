import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer contact="Email: dharm@example.com | LinkedIn: linkedin.com/in/dharm" />
      </div>
    </BrowserRouter>
  )
}

export default App
