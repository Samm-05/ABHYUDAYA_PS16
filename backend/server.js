import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to DB
connectDB();

// middlewares
app.use(cors({ origin: 'http://localhost:5173' })); // adjust frontend origin
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});