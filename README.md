# Modern Photobooth Application

A beautiful, modern web-based photobooth application that captures photos and automatically creates vertical photo strip collages. Built with HTML, CSS, and JavaScript using the Webcam API.

## Features

✨ **Modern Design**
- Gradient backgrounds with soft colors
- Rounded corners and smooth animations
- Clean, minimal interface
- Responsive design for all devices

📸 **Photo Capture**
- Real-time camera preview
- Countdown animation (3...2...1) before each capture
- Stores up to 4 photos automatically
- Mirror effect for natural selfie experience

🎨 **Photo Strip Generation**
- Automatic vertical collage creation
- Clean white borders around each photo
- Subtle shadows for depth
- Professional photo strip layout

💾 **Actions**
- Save collage as PNG image
- Retake all photos to start fresh
- Progress indicator showing photo count

## How to Run

### Option 1: Simple HTTP Server (Recommended)

Since this app uses the Webcam API, it requires HTTPS or localhost. Here are the easiest ways to run it:

#### Using Python 3:
```bash
# Python 3.x
python -m http.server 8000

# Then open your browser and navigate to:
# http://localhost:8000
```

#### Using Node.js (http-server):
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd photobooth

# Start the server
http-server -p 8000

# Then open your browser and navigate to:
# http://localhost:8000
```

#### Using PHP:
```bash
php -S localhost:8000
```

### Option 2: Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: GitHub Pages / Netlify / Vercel

For a production deployment:
- Upload all files to GitHub Pages, Netlify, or Vercel
- The Webcam API works over HTTPS, so these platforms are perfect

## Browser Requirements

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support (may require HTTPS)
- **Mobile browsers**: ✅ Full support

**Note**: The Webcam API requires:
- HTTPS connection (or localhost)
- User permission to access camera
- Modern browser with WebRTC support

## Usage Instructions

1. **Allow Camera Access**: When prompted, click "Allow" to grant camera permissions
2. **Take Photos**: Click the "Take Photo" button 4 times
   - A countdown (3...2...1) will appear before each capture
   - Watch the progress dots fill up as you capture photos
3. **View Collage**: After the 4th photo, your photo strip will be automatically generated
4. **Save or Retake**:
   - Click "Save" to download your photo strip as a PNG image
   - Click "Retake" to start over and capture new photos

## Design Recommendations

### Color Palette

The application uses a modern gradient color scheme:
- **Primary Gradient**: Purple to Indigo (`#6366f1` → `#764ba2`)
- **Background**: Gradient from soft purple to deep purple
- **Surface**: White with 95% opacity for a glassmorphic effect
- **Success**: Emerald green (`#10b981`) for save button
- **Shadows**: Soft, layered shadows for depth

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300-700 (Light to Bold)
- **Headings**: 32px with gradient text effect
- **Body**: 16px with secondary color for less important text

### UI Elements

- **Border Radius**: 16-24px for major containers, 12px for buttons
- **Spacing**: Generous padding (24-32px) for comfortable touch targets
- **Animations**: Smooth transitions (0.3s ease) for all interactions
- **Shadows**: Layered shadows (sm, md, lg) for depth hierarchy

### Layout Principles

- **Centered Layout**: Maximum width of 500px for optimal viewing
- **Aspect Ratios**: 3:4 for photo preview (standard portrait)
- **Progressive Disclosure**: Hide/show screens based on state
- **Feedback**: Visual feedback for all user actions

## File Structure

```
photobooth/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # Application logic and camera handling
└── README.md       # This file
```

## Technical Details

### Camera API
- Uses `navigator.mediaDevices.getUserMedia()` for camera access
- Supports front-facing camera (`facingMode: 'user'`)
- Automatically stops camera stream when collage is generated

### Canvas API
- Uses HTML5 Canvas for photo capture and collage generation
- Mirrors the video preview for natural selfie experience
- Generates high-quality JPEG images (90% quality)

### Collage Algorithm
- Each photo is 600x450px in the collage
- 20px white borders around the entire strip
- 10px spacing between photos
- Smart cropping to maintain aspect ratios while filling frames

## Customization

### Change Number of Photos

In `script.js`, modify:
```javascript
maxPhotos: 4,  // Change to any number
```

### Change Photo Dimensions

In `script.js`, in the `generateCollage()` function:
```javascript
const photoWidth = 600;    // Adjust width
const photoHeight = 450;   // Adjust height
const borderWidth = 20;    // Adjust border size
```

### Change Colors

In `style.css`, modify the CSS variables:
```css
:root {
    --primary-color: #6366f1;      /* Primary button color */
    --secondary-color: #8b5cf6;    /* Secondary gradient color */
    --success-color: #10b981;      /* Save button color */
}
```

## Troubleshooting

### Camera Not Working

1. **Check Permissions**: Ensure you've granted camera permissions
2. **Check HTTPS**: Camera API requires HTTPS or localhost
3. **Check Browser**: Use a modern browser (Chrome, Firefox, Safari, Edge)
4. **Check Camera**: Ensure no other app is using the camera

### Photos Not Saving

1. **Check Browser Downloads**: Some browsers block automatic downloads
2. **Check Permissions**: Ensure browser allows file downloads
3. **Try Right-Click**: Right-click on the collage and "Save Image As"

### Countdown Not Showing

- The countdown appears centered on screen
- If it doesn't show, check browser console for errors
- Ensure CSS animations are enabled in your browser

## Example Output

The application generates a vertical photo strip similar to traditional photobooth strips:
- 4 photos stacked vertically
- Clean white borders
- Professional shadow effect
- PNG format for high quality

## Future Enhancements

Potential features to add:
- [ ] Filters and effects
- [ ] Custom borders and frames
- [ ] Social media sharing
- [ ] Print options
- [ ] Customizable layouts (2x2, 3x1, etc.)
- [ ] Animated GIF creation
- [ ] QR code for easy download

## License

This project is open source and available for personal and commercial use.

## Support

If you encounter any issues or have questions, please check the troubleshooting section above or review the browser console for error messages.

---

**Enjoy your modern photobooth experience! 📸✨**

