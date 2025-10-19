'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const fullScreenIframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    // Load Vimeo Player API
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (iframeRef.current && (window as any).Vimeo) {
        playerRef.current = new (window as any).Vimeo.Player(iframeRef.current)
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.setVolume(1)
        setIsMuted(false)
      } else {
        playerRef.current.setVolume(0)
        setIsMuted(true)
      }
    }
  }

  const openFullScreen = () => {
    setIsFullScreen(true)
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Media that grows your business.
          </h1>

          <button
            className={styles.ctaButton}
            onClick={() => {
              document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>Get Started</span>
            <svg
              className={styles.arrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.imageContainer}>
          <div
            className={styles.videoWrapper}
            onClick={openFullScreen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openFullScreen()}
          >
            <iframe
              ref={iframeRef}
              className={styles.videoBox}
              src="https://player.vimeo.com/video/1128692212?badge=0&autopause=0&autoplay=1&loop=1&muted=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ width: '100%', height: '100%' }}
            />
            <button
              className={styles.muteButton}
              onClick={(e) => {
                e.stopPropagation()
                toggleMute()
              }}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L6 9H2V15H6L11 19V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="23"
                    y1="9"
                    x2="17"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17"
                    y1="9"
                    x2="23"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L6 9H2V15H6L11 19V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isFullScreen && (
        <div
          className={`${styles.fullScreenModal} ${isFullScreen ? styles.modalOpen : ''}`}
          onClick={closeFullScreen}
        >
          <button
            className={styles.closeButton}
            onClick={closeFullScreen}
            aria-label="Close fullscreen"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={styles.fullScreenVideoWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              ref={fullScreenIframeRef}
              className={styles.fullScreenVideo}
              src="https://player.vimeo.com/video/1128692212?badge=0&autopause=0&autoplay=1&loop=1&muted=0&controls=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
