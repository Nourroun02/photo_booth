# 📸 Modern Photobooth Application

<div align="center">

![Photobooth Banner](https://img.shields.io/badge/📸-Modern_Photobooth-FF6B9D?style=for-the-badge&logo=camera&logoColor=white)
![Built with](https://img.shields.io/badge/Built_with-HTML5_CSS3_JS-FFA726?style=for-the-badge&logo=javascript&logoColor=white)
![License](https://img.shields.io/badge/License-Open_Source-4CAF50?style=for-the-badge)

**✨ A beautiful, modern web-based photobooth application that captures photos and automatically creates vertical photo strip collages ✨**

🚀 **[TRY IT LIVE](https://nourroun02.github.io/photo_booth/)**

</div>

---

## 🌟 Features Overview

<div align="center">

| ✨ Design | 📸 Capture | 🎨 Generation | 💾 Actions |
|-----------|------------|---------------|------------|
| Gradient backgrounds | Real-time preview | Vertical collage | Save as PNG |
| Smooth animations | Countdown timer | White borders | Retake photos |
| Clean interface | Mirror effect | Professional layout | Progress tracking |
| Responsive design | Auto storage | Subtle shadows | Easy download |

</div>

### 🎨 **Modern Design**
- 🌈 Gradient backgrounds with soft, eye-pleasing colors
- 🔘 Rounded corners and smooth animations
- 🎯 Clean, minimal interface for intuitive use
- 📱 Responsive design optimized for all devices

### 📸 **Photo Capture**
- 👁️ Real-time camera preview with live feedback
- ⏱️ Engaging countdown animation (3...2...1) before each capture
- 📦 Intelligent storage of up to 4 photos automatically
- 🪞 Mirror effect for natural selfie experience

### 🎨 **Photo Strip Generation**
- ⚡ Automatic vertical collage creation
- ⚪ Clean white borders around each photo
- 🌟 Subtle shadows for professional depth
- 🖼️ Professional photo strip layout

### 💾 **Actions & Controls**
- 💾 Save collage as high-quality PNG image
- 🔄 Retake all photos to start fresh
- 📊 Progress indicator showing photo count
- 🎯 One-click operations for ease of use

---

## 🚀 Quick Start Guide

### 💻 **Running the Application**

Since this app uses the Webcam API, it requires HTTPS or localhost. Here are the easiest ways to run it:

#### 🐍 **Option 1: Python Server (Recommended)**

```bash
# For Python 3.x
python -m http.server 8000

# Navigate to: http://localhost:8000
```

#### 📦 **Option 2: Node.js Server**

```bash
# Install http-server globally
npm install -g http-server

# Start the server
http-server -p 8000

# Navigate to: http://localhost:8000
```

#### 🐘 **Option 3: PHP Server**

```bash
php -S localhost:8000
```

#### ⚡ **Option 4: VS Code Live Server**

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📖 **Usage Instructions**

<div align="center">

### 📸 **Step-by-Step Guide**

**Step 1** → **Step 2** → **Step 3** → **Step 4**

</div>

1. **🎫 Grant Camera Access**
   - Click "Allow" when prompted to grant camera permissions
   - Ensure no other applications are using your camera

2. **📸 Capture Your Photos**
   - Click the "Take Photo" button 4 times
   - Watch the countdown (3...2...1) before each capture
   - See progress dots fill up as you capture photos

3. **🎨 View Your Collage**
   - After the 4th photo, your photo strip generates automatically
   - Review your beautiful vertical photo strip

4. **💾 Save or Retake**
   - Click **"Save"** to download your photo strip as a PNG
   - Click **"Retake"** to start over with new photos

---

## 📁 **Project Structure**

```
photobooth/
├── 🎨 index.html      # Main HTML structure & UI
├── 🎭 style.css       # Beautiful styling & animations
├── ⚡ script.js       # Application logic & camera handling
└── 📖 README.md       # This comprehensive guide
```

---

## ⚙️ **Technical Specifications**

### 🎥 **Camera API Integration**
- Utilizes `navigator.mediaDevices.getUserMedia()` for seamless camera access
- Optimized for front-facing camera (`facingMode: 'user'`)
- Automatically manages camera stream lifecycle
- Handles permissions gracefully

### 🎨 **Canvas API Implementation**
- Leverages HTML5 Canvas for high-quality photo capture
- Implements mirror effect for natural selfie experience
- Generates premium JPEG images (90% quality)
- Real-time photo processing and collage generation

---

## 🛠️ **Customization Options**

### 📊 **Adjust Photo Count**

In `script.js`, modify the configuration:
```javascript
maxPhotos: 6,  // Change to any number (e.g., 2, 4, 6, 8)
```

### 📐 **Customize Photo Dimensions**

In `script.js`, within the `generateCollage()` function:
```javascript
const photoWidth = 800;    // Adjust width (default: 600)
const photoHeight = 600;   // Adjust height (default: 450)
const borderWidth = 25;    // Adjust border size (default: 20)
```

### 🎨 **Personalize Color Scheme**

In `style.css`, customize the CSS variables:
```css
:root {
    --primary-color: #667eea;      /* Primary button color */
    --secondary-color: #764ba2;    /* Secondary gradient color */
    --success-color: #48bb78;      /* Save button color */
    --accent-color: #f6ad55;       /* Accent highlights */
}
```

---

## 🛠️ **Troubleshooting Guide**

| ❌ **Issue** | ✅ **Solution** |
|--------------|-----------------|
| **Camera not working** | • Check permissions • Use HTTPS/localhost • Try modern browser • Close other camera apps |
| **Countdown not showing** | • Check browser console • Ensure CSS animations enabled • Refresh page |
| **Photos not saving** | • Check download permissions • Clear browser cache • Try different browser |
| **Poor image quality** | • Check camera resolution • Clean camera lens • Ensure good lighting |

### 🔧 **Common Solutions**

1. **🔐 Permission Issues**
   - Ensure camera permissions are granted
   - Check browser settings for camera access
   - Try refreshing the page

2. **🌐 HTTPS Requirements**
   - Camera API requires HTTPS or localhost
   - Use local server for development
   - Deploy to HTTPS-enabled hosting

3. **🔄 Browser Compatibility**
   - Use modern browsers (Chrome, Firefox, Safari, Edge)
   - Update to latest browser version
   - Disable browser extensions that might interfere

---

## 🎯 **Example Output**

<div align="center">

### 📸 **Generated Photo Strip**

Your application creates professional-quality vertical photo strips:

- ✅ 4 high-resolution photos stacked vertically
- ⚪ Clean white borders for professional appearance
- 🌟 Subtle shadow effects for depth
- 💾 High-quality PNG format for printing/sharing
- 🎨 Consistent spacing and alignment

</div>

---

## 🎉 **Showcase**

<div align="center">

**🚀 Ready to create amazing photo memories? Try it now!**

[![Live Demo](https://img.shields.io/badge/🚀-Try_Live_Demo-FF6B9D?style=for-the-badge&logo=demo&logoColor=white)](https://nourroun02.github.io/photo_booth/)

**Share your creations and tag us! 📸✨**

</div>

---

## 📜 **License & Credits**

<div align="center">

**📄 Open Source License**

This project is open source and available for personal and commercial use. Feel free to:

- ✅ Use for personal projects
- ✅ Modify and customize
- ✅ Use in commercial applications
- ✅ Share and distribute

**🤝 Contributions Welcome**

</div>

---

<div align="center">

**Made with ❤️ by MiniMax Agent**

*Creating beautiful web experiences, one pixel at a time*

</div>
