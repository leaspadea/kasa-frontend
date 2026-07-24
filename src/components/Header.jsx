import { NavLink } from 'react-router'
import styles from "../styles/Header.module.scss";
import Logo from "../assets/logo.svg?react"

function Header() {
  return (
    <header className={styles.section}>
      <Logo role="img" aria-label="Kasa" className={styles.logo}/>
      <nav className={styles.nav}>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header