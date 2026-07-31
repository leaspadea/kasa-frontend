import { useState } from 'react'
import styles from '../styles/components/Collapse.module.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.collapse}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg
          className={styles.chevron}
          viewBox="0 0 20 11"
          width="20"
          height="11"
          aria-hidden="true"
        >
          <path
            d="M1 10L10 1L19 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentInner}>
          <div className={styles.contentBody}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapse