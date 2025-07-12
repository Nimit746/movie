




import mongoose from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import body from 'body-parser'
import connectdb from './db.js'
import Movie from './movie.js'
import { buildRecommendationEngine } from './utils/recommend.js'

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(cors());
app.use(body.json());

await connectdb();

// Home route
app.get('/', async (req, res) => {
    try {
        const data = await Movie.find().limit(10);
        console.log('Data fetched successfully');
        res.status(200).json({ data, success: true });
    } catch (err) {
        console.log('Error: ${ err.message }');
        res.status(500).send('Internal Server Error');
    }
});

// Search by genre
app.get('/api/movies', async (req, res) => {
    const { genre, limit = 5 } = req.query;
    const movies = await Movie.find({ genres: genre }).limit(Number(limit));
    res.json(movies);
});

// ✅ Fixed: Search by title (case-insensitive)
app.get('/api/movies/search', async (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const movies = await Movie.find({
            title: { $regex: new RegExp(title, 'i') }
        }).limit(10);

        console.log('Search query:', title);
        console.log('Search result:', movies);

        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Search failed', message: err.message });
    }
});

// Recommendation route
app.get('/api/recommend', async (req, res) => {
    const { title, limit = 5 } = req.query;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const movies = await Movie.find().limit(500);
        const engine = buildRecommendationEngine(movies);
        const recommendations = engine.recommend(title, Number(limit));
        const targetMovie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());

        res.status(200).json({
            success: true,
            targetMovie,
            recommendations,
        });
    } catch (err) {
        console.error('Recommendation error:', err);
        res.status(500).json({ error: 'Recommendation failed', message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${ PORT }`);
});