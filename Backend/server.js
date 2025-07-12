import mongoose from 'mongoose'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import body from 'body-parser'
import connectdb from './db.js'
import Movie from './movie.js'

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(cors());
app.use(body.json());


await connectdb();

app.get('/', async (req, res) => {
    try {
        const data = await Movie.find().limit(10);
        console.log('Data fetched successfully');
        res.status(200).json({
            data: data,
            success: true,
        });

    } catch (err) {
        console.log(`Error: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }
})





app.get('/api/movies', async (req, res) => {
    const { genre, limit = 5 } = req.query;
    const movies = await Movie.find({ genres: genre }).limit(Number(limit));
    res.json(movies);
});



app.get('/api/movies/search', async (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const movies = await Movie.find({
            title: { $regex: title, $options: 'i' }
        }).limit(10);
        console.log('Data for searcbar fetched successfully!');
        
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Search failed', message: err.message });
    }
});









app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);

})