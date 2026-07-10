import { NavLink } from 'react-router'

function Header() {
  return (
    <header>
      <p>Kasa</p>
      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header