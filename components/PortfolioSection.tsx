import PortfolioCarousel from './PortfolioCarousel'
import { portfolioItems } from '@/lib/portfolioData'
import { getPortfolioImages } from '@/lib/getPortfolioImages'

/**
 * Server component that loads portfolio images
 * Automatically uses images from /public/gallery if it exists,
 * otherwise falls back to manually configured images
 */
export default function PortfolioSection() {
  // Try to load images from the gallery folder
  const galleryImages = getPortfolioImages()

  // Use gallery images if available, otherwise use fallback
  const items = galleryImages.length > 0 ? galleryImages : portfolioItems

  return <PortfolioCarousel items={items} />
}
