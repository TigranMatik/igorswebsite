import fs from 'fs'
import path from 'path'
import { PortfolioItem } from './portfolioData'

/**
 * Automatically loads all images from the /public/gallery folder
 *
 * USAGE:
 * 1. Create a /public/gallery folder if it doesn't exist
 * 2. Add your images to that folder (supports: .jpg, .jpeg, .png, .webp, .gif)
 * 3. Images will automatically appear in your portfolio
 * 4. For custom ordering, rename files: 01-name.jpg, 02-name.jpg, etc.
 */
export function getPortfolioImages(): PortfolioItem[] {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery')

  // Check if gallery directory exists
  if (!fs.existsSync(galleryDir)) {
    console.warn('Gallery directory does not exist at:', galleryDir)
    console.warn('Using fallback portfolio data. Create /public/gallery folder to use auto-loading.')
    return []
  }

  try {
    // Read all files from the gallery directory
    const files = fs.readdirSync(galleryDir)

    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })

    // Sort files alphabetically (supports numbered prefixes like 01-, 02-, etc.)
    imageFiles.sort()

    // Map to PortfolioItem format
    const portfolioItems: PortfolioItem[] = imageFiles.map((file, index) => {
      // Remove file extension and numbers for the title
      const title = path.basename(file, path.extname(file))
        .replace(/^\d+-/, '') // Remove leading numbers like "01-"
        .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
        .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word

      return {
        id: index + 1,
        title: title,
        image: `/gallery/${file}`
      }
    })

    console.log(`Loaded ${portfolioItems.length} images from gallery folder`)
    return portfolioItems
  } catch (error) {
    console.error('Error reading gallery directory:', error)
    return []
  }
}
