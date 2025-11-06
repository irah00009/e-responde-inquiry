# E-Responde Inquiry Page

A professional landing page for the E-Responde Mobile App and Smartwatch Application download portal.

## Features

- 🎨 Modern, professional design with theme colors (#2d3580 and white)
- ✨ Micro-animations and smooth transitions
- 📱 Fully responsive design with Bootstrap 5
- 🚀 Optimized for Render Web Service deployment
- ⬇️ Download sections for Mobile App and Smartwatch APK
- 📊 Showcase sections for civilian and police apps
- 🎯 Enhanced About section with feature cards
- 💻 Technology stack showcase

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create downloads directory:
```bash
mkdir downloads
touch downloads/.gitkeep
```

3. Start development server:
```bash
npm run dev
```

4. Visit http://localhost:3000

## Deployment on Render

1. Push your code to GitHub/GitLab/Bitbucket

2. Connect your repository to Render:
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your repository
   - Render will auto-detect the `render.yaml` configuration

3. Upload APK files:
   - After deployment, upload your APK files to the `downloads/` directory
   - Update the download button links in `script.js`:
     ```javascript
     // In script.js, update these lines:
     window.location.href = '/downloads/e-responde-mobile.apk';
     window.location.href = '/downloads/e-responde-smartwatch.apk';
     ```

4. Environment Variables (optional):
   - `PORT`: Server port (default: 3000)
   - `NODE_ENV`: Set to "production"

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript for interactivity
├── server.js           # Express server
├── package.json        # Dependencies
├── render.yaml         # Render deployment config
└── downloads/          # APK files directory (create this)
    └── .gitkeep
```

## Adding APK Files

1. Place your APK files in the `downloads/` directory:
   - `e-responde-mobile.apk`
   - `e-responde-smartwatch.apk`

2. Update `script.js` to remove the alert and enable actual downloads:
   ```javascript
   // Replace the alert with:
   window.location.href = '/downloads/e-responde-mobile.apk';
   ```

## Customization

### Theme Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #1e3a8a;
    --lavender: #a78bfa;
    /* ... */
}
```

### Content
Edit the HTML content in `index.html` to update text, features, and sections.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

