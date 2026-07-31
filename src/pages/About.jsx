import Collapse from "../components/Collapse"
import Banner from '../components/Banner'
import banner from '../assets/banner_about.jpg'
import styles from '../styles/pages/About.module.scss'

const aboutSections = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      'La qualité prime pour nos hébergements, votre satisfaction est notre priorité. Si vous pensez qu\'un hôte ne respecte pas les règles minimales de sécurité, faites-le nous savoir en le signalant.',
  },
  {
    title: 'Sécurité',
    content:
      'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.',
  },
]

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.srOnly}>À propos</h1>
      <Banner image={banner} overlay={0.3} />
      <div className={styles.collapses}>
      {aboutSections.map((section) => (
        <Collapse key={section.title} title={section.title} content={section.content} />
      ))}
      </div>
    </div>
  )
}

export default About