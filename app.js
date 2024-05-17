//app.js
const express = require('express');
const app = express();
const shoeRoutes = require('./routes/shoeRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', shoeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
