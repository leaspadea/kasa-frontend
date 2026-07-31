import styles from '../styles/Banner.module.scss'

function Banner({ image, overlay = 0.6, children }) {
  return (
    <div className={styles.banner} style={{ '--overlay-opacity': overlay }}>
      <img src={image} alt="" />
      {children}
    </div>
  )
}

export default Banner