import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const skills = ['React', 'JavaScript', 'CSS', 'Vite']
  const projects = [
    { name: 'Portfolio Website', description: 'A responsive personal portfolio built with React.' },
    { name: 'Task Manager', description: 'A practical app for organizing daily tasks and priorities.' },
    { name: 'Weather App', description: 'A simple dashboard that shows weather information clearly.' },
  ]

  return (
    <div className="app-shell">
      <Header name="Dharm Vaghasiya" themeColor="#4f46e5" />
      <About bio="I am a student passionate about building accessible and user-friendly web interfaces. I enjoy turning ideas into polished React applications." />
      <Skills skillList={skills} />
      <Projects projects={projects} />
      <Footer contact="Email: dharm@example.com | LinkedIn: linkedin.com/in/dharm" />
    </div>
  )
}

export default App
