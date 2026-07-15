function ProjectsPage() {
  const projects = [
    { name: 'Portfolio Website', description: 'A responsive website built with React Router and reusable components.' },
    { name: 'Task Manager', description: 'An app for managing priorities and daily tasks.' },
    { name: 'Weather App', description: 'A lightweight dashboard for checking weather updates.' },
  ]

  return (
    <section className="page-stack">
      <div className="content-section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
