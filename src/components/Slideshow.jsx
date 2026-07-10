import { useState } from 'react'

function Slideshow({ pictures }) {
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
    <div className="slideshow">
      {showControls && (
        <button
          type="button"
          className="slideshow__arrow slideshow__arrow--left"
          onClick={goToPrevious}
          aria-label="Image précédente"
        >
          ❮
        </button>
      )}

      <img src={pictures[currentIndex]} alt="" />

      {showControls && (
        <button
          type="button"
          className="slideshow__arrow slideshow__arrow--right"
          onClick={goToNext}
          aria-label="Image suivante"
        >
          ❯
        </button>
      )}

      {showControls && (
        <p className="slideshow__counter">
          {currentIndex + 1}/{pictures.length}
        </p>
      )}
    </div>
  )
}

export default Slideshow