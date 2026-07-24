import useFetch from '../hooks/useFetch'
import { Link } from 'react-router'
import Card from '../components/Card'
import Slideshow from '../components/Slideshow'

function Home() {
  const { data: properties } = useFetch('http://localhost:8080/api/properties')

  return (
    <div>
      <h1>Accueil</h1>
      {properties.map((property) => (
        <Link key={property.id} to={`/logement/${property.id}`}>
          <Card title={property.title} cover={property.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Home