'use client'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Let's Work Together</h1>
        <p className={styles.subtitle}>Get in touch and let's create something amazing</p>

        <div className={styles.card}>
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="22,6 12,13 2,6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactLabel}>Email</h3>
              <a href="mailto:Igorjejelavaa@gmail.com" className={styles.contactValue}>
                Igorjejelavaa@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactLabel}>Instagram</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/igor_j_foto?igsh=MWMwY2gwNHh0Y2wzMA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  @igor_j_foto
                </a>
                <a
                  href="https://www.instagram.com/igorjmedia?igsh=ZzN5cTRxOWhuM2p1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  @igorjmedia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
