const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve APK files with proper headers for download
app.get('/downloads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'downloads', filename);
    
    // Check if file exists
    if (fs.existsSync(filePath) && filename.endsWith('.apk')) {
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

