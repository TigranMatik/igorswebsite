'use client'

import { useEffect } from 'react'
import styles from './ScheduleCall.module.css'

export default function ScheduleCall() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="schedule" className={styles.scheduleSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ready to bring your vision to life?</h1>
        <p className={styles.subtitle}>
          Let's discuss your project and how we can create stunning media together.
        </p>

        <div className={styles.calendlyWrapper}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/igorjejelavaa/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  )
}
