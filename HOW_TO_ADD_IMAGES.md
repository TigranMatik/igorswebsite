# How to Add Images to Your Portfolio

You have **two easy options** for adding images to your portfolio gallery:

---

## Option 1: Automatic Loading (Recommended) ⭐

This is the easiest way - just drop images in a folder!

### Steps:

1. **Create the gallery folder** (if it doesn't exist):
   ```
   /public/gallery/
   ```

2. **Add your images** to this folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
   - Example: Drop `my-photo.jpg` into `/public/gallery/`

3. **That's it!** Your images will automatically appear on the website

### Tips:

- **Custom ordering**: Rename files with numbers
  - Example: `01-ferrari.jpg`, `02-porsche.jpg`, `03-lamborghini.jpg`
  - They'll appear in this order

- **Custom titles**: The filename becomes the title
  - `ferrari-f40.jpg` → "Ferrari F40"
  - `01-red-car.jpg` → "Red Car"

### Example Structure:
```
/public/
  └── gallery/
      ├── 01-ferrari-red.jpg
      ├── 02-porsche-911.jpg
      ├── 03-lamborghini.jpg
      └── 04-mclaren.jpg
```

---

## Option 2: Manual Entry (Simple)

Add images one by one with full control over titles.

### Steps:

1. **Add your image** to the `/public/` folder
   - Example: `/public/my-car.jpg`

2. **Edit the file**: `/lib/portfolioData.ts`

3. **Add a new entry** to the `portfolioItems` array:
   ```typescript
   { id: 9, title: 'My Amazing Car', image: '/my-car.jpg' }
   ```

### Example:
```typescript
export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Ferrari 1', image: '/ferrari-1.jpg' },
  { id: 2, title: 'Ferrari 2', image: '/ferrari-2.jpg' },
  // Add your new image here:
  { id: 9, title: 'My New Photo', image: '/my-new-photo.jpg' },
]
```

---

## Which Option Should I Use?

| Feature | Option 1 (Auto) | Option 2 (Manual) |
|---------|----------------|-------------------|
| Ease of use | ✅ Just drop files | Need to edit code |
| Speed | ✅ Instant | Need to redeploy |
| Control over titles | Auto-generated | ✅ Full control |
| Control over order | Number prefixes | ✅ Full control |

**Recommendation**: Use **Option 1** for quick updates, use **Option 2** if you need precise control over titles and ordering.

---

## Troubleshooting

### Images not showing up?

1. **Check folder location**: Make sure images are in `/public/gallery/`
2. **Check file format**: Only `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif` are supported
3. **Restart dev server**: After adding the gallery folder for the first time, restart with `npm run dev`
4. **Check console**: Look for any error messages in the terminal

### Still not working?

The website will automatically fall back to the manual entries in `/lib/portfolioData.ts`. Check that file to see the current images.

---

## Need Help?

- Check the `/lib/getPortfolioImages.ts` file for the auto-loading logic
- Make sure the `/public/gallery/` folder exists
- Ensure your images have the correct file extensions
