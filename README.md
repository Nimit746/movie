# Movie Discovery & Management App

A full-stack application built with the MERN stack (well, Vite + React + Express + MongoDB) for discovering movies and shows, managing a watchlist, and searching for content.

## 🚀 Features

- **Home Page**: Discover featured and trending movies/shows.
- **Search**: Real-time search functionality for finding specific titles.
- **Movies & Shows**: Dedicated sections for browsing movies and TV series.
- **Watchlist**: Save your favorite titles for later viewing.
- **Responsive Design**: Modern UI built with Tailwind CSS v4.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Environment Management**: [Dotenv](https://github.com/motdotla/dotenv)

### Data Processing
- **Script**: `pre.py` (Python script used for data cleaning and preprocessing using Pandas).

## 📂 Project Structure

```text
movie/
├── Backend/            # Express server and database models
│   ├── server.js       # Main entry point
│   ├── db.js           # Database connection
│   ├── movie.js        # Mongoose schema for Movies
│   └── .env            # Environment variables
├── Frontend/           # Vite + React client
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page-level components (Home, Movies, etc.)
│   │   └── App.jsx     # Main application routing
│   └── package.json    # Frontend dependencies
├── pre.py              # Python data preprocessing script
└── data.csv            # Raw dataset
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or on Atlas)
- Python 3.x (Optional, for running `pre.py`)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```
   - Create a `.env` file in the `Backend` directory and add your `MONGO_URI` and `PORT`.
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

## 🧹 Data Cleaning

The project includes a `pre.py` script to handle data preprocessing. It reads `data.csv`, removes null values, and saves the cleaned data as `new_data.csv`.

```bash
python pre.py
```

---
Happy Movie Hunting! 🍿
