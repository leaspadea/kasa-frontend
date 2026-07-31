import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import styles from '../styles/components/Layout.module.scss'

function Layout() {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout