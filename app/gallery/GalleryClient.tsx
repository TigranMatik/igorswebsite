'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './gallery.module.css'
import { PortfolioItem } from '@/lib/portfolioData'

interface GalleryProps {
  items: PortfolioItem[]
}

export default function Gallery({ items }: GalleryProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openFullScreen = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsFullScreen(true)
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  return (
    <div className={styles.galleryPage}>
      <div className={styles.header}>
        <Link href="/#portfolio" className={styles.backButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back</span>
        </Link>
        <h1 className={styles.title}>Gallery</h1>
      </div>

      <div className={styles.galleryGrid}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onClick={() => openFullScreen(item.image)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openFullScreen(item.image)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                style={{ objectFit: 'cover' }}
                priority={item.id <= 4}
              />
            </div>
          </div>
        ))}
      </div>

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
  )
}
