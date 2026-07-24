import { useParams, Navigate } from 'react-router'
import useFetch from '../hooks/useFetch'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import styles from '../styles/Housing.module.scss'

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
    <div className={styles.housing}>
      <Slideshow pictures={property.pictures} title={property.title} />

      <div className={styles.header}>
        <div className={styles.info}>
          <h1>{property.title}</h1>
          <p className={styles.location}>{property.location}</p>
          <ul className={styles.tags}>
            {property.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>


        <div className={styles.host}>
          <div className={styles.hostName}>
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((number) => (
              <span
                key={number}
                className={
                  number <= Number(property.rating)
                    ? styles.starFilled
                    : styles.starEmpty
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>


      <div className={styles.collapses}>
        <Collapse title="Description" content={property.description} />
        <Collapse title="Équipements" content={
          <ul>
            {property.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>}
        />
      </div>
    </div>
  )
}

export default Housing