const express = require('express');
const app = express();
const connectDB = require('./config/config');
const templateRoutes = require('./routes/templateRoutes');
const generateRoutes = require('./routes/generateRoutes');  // You'd implement this similarly
const errorHandler = require('./middlewares/errorHandler');

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/templates', templateRoutes);
app.use('/api/generate', generateRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
