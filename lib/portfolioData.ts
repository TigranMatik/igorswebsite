export interface PortfolioItem {
  id: number
  title: string
  image: string
}

/**
 * INSTRUCTIONS FOR ADDING NEW IMAGES:
 *
 * OPTION 1: Automatic Loading (Recommended)
 * ----------------------------------------
 * 1. Create a folder: /public/gallery
 * 2. Add your images to that folder
 * 3. Supported formats: .jpg, .jpeg, .png, .webp, .gif
 * 4. Images will automatically load from the folder
 * 5. For custom ordering, use numbered prefixes: 01-photo.jpg, 02-photo.jpg, etc.
 *
 * OPTION 2: Manual Entry (Simple)
 * -------------------------------
 * 1. Add images to /public folder
 * 2. Add entries to portfolioItems array below
 * 3. Example: { id: 9, title: 'My Photo', image: '/my-photo.jpg' }
 */

// Manual portfolio items - used as fallback if /public/gallery folder doesn't exist
export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Ferrari 1', image: '/ferrari-1.jpg' },
  { id: 2, title: 'Ferrari 2', image: '/ferrari-2.jpg' },
  { id: 3, title: 'Ferrari 3', image: '/ferrari-3.jpg' },
  { id: 4, title: 'Work 1', image: '/work-1.jpg' },
  { id: 5, title: 'Work 2', image: '/work-2.jpg' },
  { id: 6, title: 'Work 3', image: '/work-3.jpg' },
  { id: 7, title: 'Work 4', image: '/work-4.jpg' },
  { id: 8, title: 'Work 5', image: '/work-5.jpg' },
]
