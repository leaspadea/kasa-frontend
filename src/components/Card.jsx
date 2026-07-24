import styles from "../styles/Card.module.scss"

function Card({ title, cover }) {
  return (
    <article className={styles.card}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  )
}

export default Card