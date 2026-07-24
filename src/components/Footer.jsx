import styles from "../styles/Footer.module.scss";
import Logo from "../assets/logo.svg?react";


function Footer() {
  return (
    <footer className={styles.section}>
      <Logo role="img" aria-label="Kasa" className={styles.logo}/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer