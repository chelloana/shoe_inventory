const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/db.config');
const shoeRoutes = require('./routes/shoeRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', shoeRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sync the database schema
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => {
    console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
