const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk meng-handle JSON request body
app.use(express.json());
// Middleware untuk meng-handle form data
app.use(express.urlencoded({ extended: false }));

// Mengakses file statis seperti HTML, CSS, dan JavaScript dari direktori yang sama dengan server.js
app.use(express.static(__dirname));

// Routing untuk halaman login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Routing untuk halaman utama/indeks
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalankan server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
