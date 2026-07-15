import { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const skills = ['React', 'JavaScript', 'CSS', 'Vite']
  const projects = [
    { name: 'Portfolio Website', description: 'A responsive personal portfolio built with React.' },
    { name: 'Task Manager', description: 'A practical app for organizing daily tasks and priorities.' },
    { name: 'Weather App', description: 'A simple dashboard that shows weather information clearly.' },
  ]

  return (
    <div className="page-stack">
      <Header name="Dharm Vaghasiya" themeColor="#4f46e5" />
      <button className="toggle-button" onClick={() => setShowIntro((value) => !value)}>
        {showIntro ? 'Hide intro' : 'Show intro'}
      </button>
      {showIntro && (
        <section className="content-section">
          <h2>Welcome</h2>
          <p>This portfolio now uses React Router to navigate between pages smoothly.</p>
        </section>
      )}
      <About bio="I am a student passionate about building accessible and user-friendly web interfaces. I enjoy turning ideas into polished React applications." />
      <Skills skillList={skills} />
      <Projects projects={projects} />
    </div>
  )
}

export default Home
