import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

function Home() {
  const { data: properties } = useFetch('http://localhost:8080/api/properties')
  
  return (
    <div>
      <h1>Accueil</h1>
      {properties.map((property) => (
        <Card key={property.id} title={property.title} cover={property.cover} />
      ))}
    </div>
  )
}

export default Home