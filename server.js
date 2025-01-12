import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/jobs', jobRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
