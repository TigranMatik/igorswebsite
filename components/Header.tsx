'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => scrollToSection(e, 'home')}>
          <Image
            src="/logo.png?v=2"
            alt="Igorjmedia Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span>Igorjmedia</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home" className={styles.navLink} onClick={(e) => scrollToSection(e, 'home')}>
            Home
          </a>
          <a href="#portfolio" className={styles.navLink} onClick={(e) => scrollToSection(e, 'portfolio')}>
            Portfolio
          </a>
          <a href="#contact" className={styles.navLink} onClick={(e) => scrollToSection(e, 'contact')}>
            Contact
          </a>
          <a href="#schedule" className={`${styles.navLink} ${styles.scheduleLink}`} onClick={(e) => scrollToSection(e, 'schedule')}>
            Schedule
          </a>
        </nav>
      </div>
    </header>
  )
}
