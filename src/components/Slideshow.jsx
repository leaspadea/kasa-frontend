import { useState } from 'react'
import styles from '../styles/components/Slideshow.module.scss'

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)


  function goToPrevious() {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)

  }

  function goToNext() {
    const isLast = currentIndex === pictures.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)

  }

  const showControls = pictures.length > 1
  
  return (
    <div className={styles.slideshow}>
      {showControls && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={goToPrevious}
          aria-label="Image précédente"
        >
          ❮
        </button>
      )}

      <img src={pictures[currentIndex]} alt={title} />

      {showControls && (
        <button
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={goToNext}
          aria-label="Image suivante"
        >
          ❯
        </button>
      )}

      {showControls && (
        <p className={styles.counter}>
          {currentIndex + 1}/{pictures.length}
        </p>
      )}
    </div>
  )
}

export default Slideshow