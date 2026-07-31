import { Link } from 'react-router'
import styles from '../styles/pages/Error.module.scss'

function Error () {
    return (
        <div className={styles.section}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner à l'accueil</Link>
        </div>
    )
}

export default Error