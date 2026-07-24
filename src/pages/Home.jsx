import useFetch from '../hooks/useFetch'
import { Link } from 'react-router'
import Card from '../components/Card'
import Slideshow from '../components/Slideshow'
import banner from '../assets/photo_fond.jpg'
import styles from '../styles/Home.module.scss'

function Home() {
  const { data: properties } = useFetch('http://localhost:8080/api/properties')

  return (
    <div>
      <div className={styles.banner}>
        <img src={banner} alt="Photo de falaise" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={styles.gallery}>
      {properties.map((property) => (
        <Link key={property.id} to={`/logement/${property.id}`}>
          <Card title={property.title} cover={property.cover} />
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Home