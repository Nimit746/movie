import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    },
    title: {
        type: String, // normalize to string for consistency
        required: true
    },
    description: {
        type: String
    },
    genres: {
        type: String
    },
    poster_path: {
        type: String
    },
    release_date: {
        type: String // Keep as string unless you're converting to actual Date object
    }
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
