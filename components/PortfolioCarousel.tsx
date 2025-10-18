'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './WorkCarousel.module.css'
import { PortfolioItem } from '@/lib/portfolioData'

interface PortfolioCarouselProps {
  items: PortfolioItem[]
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const handlePrevious = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev === 0 ? items.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setDirection('right')
    setCurrentIndex((prev) =>
      prev >= items.length - 3 ? 0 : prev + 1
    )
  }

  const openFullScreen = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsFullScreen(true)
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const visibleItems = items.slice(currentIndex, currentIndex + 3)

  return (
    <section id="portfolio" className={styles.workSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Portfolio</h1>

        <div className={styles.carouselContainer}>
          <button
            className={styles.navButton}
            onClick={handlePrevious}
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className={styles.carouselItem}
                data-direction={direction}
              >
                <div
                  className={styles.imageWrapper}
                  onClick={() => openFullScreen(item.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openFullScreen(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                    style={{ objectFit: 'cover' }}
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <Link href="/gallery" className={styles.viewMoreButton}>
          View More
        </Link>

        {isFullScreen && selectedImage && (
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
              className={styles.fullScreenImageWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                className={styles.fullScreenImage}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
