//app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes'); // Import authRoutes

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes); // Use authRoutes for authentication

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
