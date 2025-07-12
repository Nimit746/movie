/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'





const Watchlist = () => {

    useEffect(() => {
        document.title = "CineMatch - watchlist";
    }, []);

    const [ismovie, setIsmovie] = useState(false);

    return (
        <main className='min-h-[93vh] w-[80%] mx-auto my-7'>
            <h1 className='text-4xl'>Watchlist</h1>

            {ismovie ? (
                <div className='flex flex-col items-center justify-center h-[60vh]'>
                    <img src="/images/watchlist.png" alt="watchlist" className='w-[300px] h-[300px]' />
                    <p className='text-2xl'>Add movies to your watchlist</p>
                </div>
            ) : (
                    
                <div>No movies in the watchlist!!</div>
                
            )}
        </main>
    )
}

export default Watchlist



/*
To create dynamic routes in React, you typically use React Router. 
First, install react-router-dom if you haven't:

npm install react-router-dom

Then, in your main App component, set up routes like this:


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/movie/:id" element={<MovieDetail />} /> {// dynamic route }
            </Routes>
        </Router>
    );
}

export default App;

In your MovieDetail component, you can access the dynamic :id parameter using the useParams hook:


const MovieDetail = () => {
    const { id } = useParams();
    // Fetch and display movie details using the id
};

This allows you to have dynamic routes like /movie/123, /movie/abc, etc.
*/
