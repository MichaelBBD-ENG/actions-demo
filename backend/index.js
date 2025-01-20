const express = require('express');
const app = express();
const port = 3000;

// Define the single endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, this is a simple API response!' });
});

// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
