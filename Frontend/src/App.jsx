/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Watchlist from './pages/Watchlist';

function App() {

  return (
    <main className="scrollbar-hide bg-[#221d11] #221d11 h-full text-white">
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/movies'
          element={<Movies />}
        />
        <Route 
          path='/shows'
          element={<Shows />}
        />
        <Route 
          path='/watchlist'
          element={<Watchlist />}
        />
      </Routes>
    </main> 
  );
}

export default App
