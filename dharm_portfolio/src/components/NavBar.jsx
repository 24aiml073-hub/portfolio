import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/projects" className="nav-link">Projects</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </nav>
  )
}

export default NavBar
