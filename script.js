/**
 * Ultimate Vintage Photobooth Application - 60s & 90s Vibes
 * Features:
 * - Camera access with flash effect
 * - Stores up to 4 photos
 * - Auto-generates vertical collage (photo strip)
 * - Fast countdown animation (600ms intervals)
 * - Vintage UI with 60s/90s retro aesthetic
 * - Film strip styling and groovy animations
 */

// Application State
const appState = {
    photos: [],
    maxPhotos: 4,
    currentPhotoIndex: 0,
    stream: null,
    isCapturing: false
};

// DOM Elements
const videoPreview = document.getElementById('videoPreview');
const captureCanvas = document.getElementById('captureCanvas');
const collageCanvas = document.getElementById('collageCanvas');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const retakeBtn = document.getElementById('retakeBtn');
const saveBtn = document.getElementById('saveBtn');
const mainScreen = document.getElementById('mainScreen');
const collageScreen = document.getElementById('collageScreen');
const countdown = document.getElementById('countdown');
const countdownNumber = document.getElementById('countdownNumber');
const currentPhotoSpan = document.getElementById('currentPhoto');
const loadingOverlay = document.getElementById('loadingOverlay');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const dots = [
    document.getElementById('dot1'),
    document.getElementById('dot2'),
    document.getElementById('dot3'),
    document.getElementById('dot4')
];

/**
 * Initialize the application
 */
async function init() {
    try {
        await startCamera();
        setupEventListeners();
        updateProgressIndicator();
    } catch (error) {
        showError('Failed to access camera. Please ensure you have granted camera permissions.');
        console.error('Camera initialization error:', error);
    }
}

/**
 * Start camera stream
 */
async function startCamera() {
    try {
        const constraints = {
            video: {
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: 'user'
            }
        };
        
        appState.stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoPreview.srcObject = appState.stream;
    } catch (error) {
        throw new Error('Camera access denied or unavailable');
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    takePhotoBtn.addEventListener('click', handleTakePhoto);
    retakeBtn.addEventListener('click', handleRetake);
    saveBtn.addEventListener('click', handleSave);
}

/**
 * Handle photo capture with countdown
 */
async function handleTakePhoto() {
    if (appState.isCapturing || appState.photos.length >= appState.maxPhotos) {
        return;
    }
    
    appState.isCapturing = true;
    takePhotoBtn.disabled = true;
    
    // Show countdown animation
    await playCountdown();
    
    // Capture photo
    capturePhoto();
    
    appState.isCapturing = false;
    takePhotoBtn.disabled = false;
}

/**
 * Play countdown animation (3, 2, 1) - Faster timer!
 */
function playCountdown() {
    return new Promise((resolve) => {
        // Clear any existing countdown
        if (window.countdownInterval) {
            clearInterval(window.countdownInterval);
        }
        
        countdown.classList.remove('hidden');
        
        let count = 3;
        
        // Set initial display
        countdownNumber.textContent = count;
        
        // Reset animations to starting state
        const circle = countdown.querySelector('.countdown-circle');
        circle.style.animation = 'none';
        countdownNumber.style.animation = 'none';
        void circle.offsetWidth; // Force reflow
        circle.style.animation = 'countdownSpin 0.6s ease';
        countdownNumber.style.animation = 'countdownPulse 0.6s ease';
        
        const countdownInterval = setInterval(() => {
            count--; // Decrement first
            
            if (count > 0) {
                countdownNumber.textContent = count;
                
                // Restart animations
                circle.style.animation = 'countdownSpin 0.6s ease';
                countdownNumber.style.animation = 'countdownPulse 0.6s ease';
            } else {
                clearInterval(countdownInterval);
                countdown.classList.add('hidden');
                window.countdownInterval = null; // Clear reference
                resolve();
            }
        }, 600);
        
        // Store interval reference globally to prevent multiple countdowns
        window.countdownInterval = countdownInterval;
    });
}

/**
 * Capture photo from video stream with flash effect
 */
function capturePhoto() {
    const video = videoPreview;
    const canvas = captureCanvas;
    const flashEffect = document.getElementById('flashEffect');
    
    // Trigger flash effect
    flashEffect.classList.remove('hidden');
    setTimeout(() => {
        flashEffect.classList.add('hidden');
    }, 300);
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame to canvas (mirror it back)
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();
    
    // Convert canvas to image data URL
    const photoData = canvas.toDataURL('image/jpeg', 0.9);
    appState.photos.push(photoData);
    appState.currentPhotoIndex++;
    
    // Update progress
    updateProgressIndicator();
    
    // Check if we've reached max photos
    if (appState.photos.length >= appState.maxPhotos) {
        generateCollage();
    } else {
        // Brief pause before next capture
        setTimeout(() => {
            takePhotoBtn.focus();
        }, 200);
    }
}

/**
 * Update progress indicator
 */
function updateProgressIndicator() {
    currentPhotoSpan.textContent = appState.photos.length;
    
    dots.forEach((dot, index) => {
        if (index < appState.photos.length) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Disable button if max photos reached
    if (appState.photos.length >= appState.maxPhotos) {
        takePhotoBtn.disabled = true;
        takePhotoBtn.querySelector('.btn-text').textContent = 'Processing...';
    }
}

/**
 * Generate vertical collage (photo strip)
 */
function generateCollage() {
    loadingOverlay.classList.remove('hidden');
    
    setTimeout(() => {
        const photos = appState.photos;
        const numPhotos = photos.length;
        
        // Collage dimensions
        const photoWidth = 600;
        const photoHeight = 450;
        const borderWidth = 20;
        const spacing = 10;
        
        const totalWidth = photoWidth + (borderWidth * 2);
        const totalHeight = (photoHeight * numPhotos) + (borderWidth * 2) + (spacing * (numPhotos - 1));
        
        // Set canvas dimensions
        collageCanvas.width = totalWidth;
        collageCanvas.height = totalHeight;
        
        const ctx = collageCanvas.getContext('2d');
        
        // Draw white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, totalWidth, totalHeight);
        
        // Draw each photo
        photos.forEach((photoData, index) => {
            const img = new Image();
            img.onload = () => {
                const y = borderWidth + (index * (photoHeight + spacing));
                
                // Draw photo with rounded corners effect
                ctx.save();
                ctx.beginPath();
                // Use manual rounded rectangle path for better browser support
                const radius = 8;
                ctx.moveTo(borderWidth + radius, y);
                ctx.lineTo(borderWidth + photoWidth - radius, y);
                ctx.quadraticCurveTo(borderWidth + photoWidth, y, borderWidth + photoWidth, y + radius);
                ctx.lineTo(borderWidth + photoWidth, y + photoHeight - radius);
                ctx.quadraticCurveTo(borderWidth + photoWidth, y + photoHeight, borderWidth + photoWidth - radius, y + photoHeight);
                ctx.lineTo(borderWidth + radius, y + photoHeight);
                ctx.quadraticCurveTo(borderWidth, y + photoHeight, borderWidth, y + photoHeight - radius);
                ctx.lineTo(borderWidth, y + radius);
                ctx.quadraticCurveTo(borderWidth, y, borderWidth + radius, y);
                ctx.closePath();
                ctx.clip();
                
                // Calculate aspect ratio and crop to fit
                const imgAspect = img.width / img.height;
                const targetAspect = photoWidth / photoHeight;
                
                let drawWidth = photoWidth;
                let drawHeight = photoHeight;
                let drawX = borderWidth;
                let drawY = y;
                
                if (imgAspect > targetAspect) {
                    // Image is wider - crop width
                    drawHeight = photoHeight;
                    drawWidth = photoHeight * imgAspect;
                    drawX = borderWidth - (drawWidth - photoWidth) / 2;
                } else {
                    // Image is taller - crop height
                    drawWidth = photoWidth;
                    drawHeight = photoWidth / imgAspect;
                    drawY = y - (drawHeight - photoHeight) / 2;
                }
                
                ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                ctx.restore();
                
                // If this is the last image, show the collage
                if (index === numPhotos - 1) {
                    loadingOverlay.classList.add('hidden');
                    showCollage();
                }
            };
            img.src = photoData;
        });
    }, 500);
}

/**
 * Show collage screen
 */
function showCollage() {
    mainScreen.classList.remove('active');
    mainScreen.classList.add('hidden');
    collageScreen.classList.remove('hidden');
    collageScreen.classList.add('active');
    
    // Stop camera stream to save resources
    if (appState.stream) {
        appState.stream.getTracks().forEach(track => track.stop());
    }
}

/**
 * Handle retake - reset application
 */
async function handleRetake() {
    // Reset state
    appState.photos = [];
    appState.currentPhotoIndex = 0;
    
    // Show main screen
    collageScreen.classList.remove('active');
    collageScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    mainScreen.classList.add('active');
    
    // Restart camera
    try {
        await startCamera();
        updateProgressIndicator();
        takePhotoBtn.querySelector('.btn-text').textContent = 'Take Photo';
        takePhotoBtn.disabled = false;
    } catch (error) {
        showError('Failed to restart camera. Please refresh the page.');
    }
}

/**
 * Handle save - download collage as image
 */
function handleSave() {
    const link = document.createElement('a');
    link.download = `photobooth-strip-${Date.now()}.png`;
    link.href = collageCanvas.toDataURL('image/png');
    link.click();
    
    // Show success feedback
    saveBtn.querySelector('span:last-child').textContent = 'Saved!';
    setTimeout(() => {
        saveBtn.querySelector('span:last-child').textContent = 'Save';
    }, 2000);
}

/**
 * Show error message
 */
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
    
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000);
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (appState.stream) {
        appState.stream.getTracks().forEach(track => track.stop());
    }
});

