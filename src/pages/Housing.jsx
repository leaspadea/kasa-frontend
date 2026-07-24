import { useParams, Navigate } from 'react-router'
import useFetch from '../hooks/useFetch'
import Slideshow from '../components/Slideshow'
import Collapse from "../components/Collapse"

function Housing() {
  const { id } = useParams()
  const { data: property, isLoading, error } = useFetch(
    `http://localhost:8080/api/properties/${id}`
  )

  if (isLoading) {
    return <p>Chargement...</p>
  }
  
  if (error) {
    return <Navigate to="/404" replace />
  }

  return (
    <div>
      <Slideshow pictures={property.pictures} title={property.title} />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <ul>
        {property.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div>
        <p>{property.host.name}</p>
        <img src={property.host.picture} alt={property.host.name} />
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((number) => (
          <span key={number}>
            {number <= Number(property.rating) ? '★' : '☆'}
          </span>
        ))}
      </div>
      <Collapse title="Description" content={property.description} />
      <Collapse title="Équipements" content={
        <ul>
          {property.equipments.map((equipement) => (
            <li key={equipement}>{equipement}</li>
          ))}
        </ul>}
      />
    </div>
  )
}

export default Housing