import useFetch from '../hooks/useFetch'
import { Link } from 'react-router'
import Card from '../components/Card'
import Banner from '../components/Banner'
import banner from '../assets/banner_homepage.jpg'
import styles from '../styles/Home.module.scss'

function Home() {
  const { data: properties } = useFetch('http://localhost:8080/api/properties')

  return (
    <div>
      <Banner image={banner}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
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