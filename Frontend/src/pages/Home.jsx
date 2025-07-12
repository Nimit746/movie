/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Searchbar from '../components/Searchbar'
import Display from '../components/DIsplay';
// import { Movie } from '..';


const Home = () => {


    const [Movie, setMovie] = useState([])







    const fetchdata = async () => {
        const res = await fetch('http://localhost:3000/');
        const data = await res.json();
        if (data.success) {
            console.log('Data fetched successfully\n');
            console.log('Data:\n', data.data, '\n');
            setMovie(data.data);
        } else {
            console.error("Failed to fetch data");
        }
    }





    useEffect(() => {
        fetchdata();
        document.title = "CineMatch";
    }, []);

    return (
        <main className="bg-[#221d11] #221d11 min-h-[87.8vh] text-white w-[80%] mx-auto">
            <Searchbar />

            <div className="flex flex-col items-center justify-center gap-2 mt-5 w-full mx-auto">
                <div className="flex justify-between items-center w-full mx-auto gap-3">
                    <h1 className='text-3xl font-bold'>Featured Movies</h1>
                </div>

                <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide w-full mx-auto mt-5 h-76 mb-30 overflow-hidden">
                    {Movie &&
                        Movie.map((movie, index) => (
                            <Card
                                key={movie._id}
                                title={movie.title}
                                description={`${movie.release_date} ${movie.genres}`}
                                src="https://imgs.search.brave.com/kFdmmW_MKtrNxu9vgsUtKnuQjFu_myT5mFJmTn8aHGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3LmFscGhhY29k/ZXJzLmNvbS81MTgv/dGh1bWJiaWctNTE4/NzgzLndlYnA"
                            />
                        ))}
                </div>
            </div>


            <div className="flex flex-col items-center justify-center gap-2 mt-5 w-full mx-auto">
                <div className="flex justify-between items-center w-full mx-auto gap-3">
                    <h1 className='text-3xl font-bold'>Favorite Movies</h1>
                </div>

                <div className="flex justify-start items-center overflow-x-scroll scrollbar-hide w-full mx-auto mt-5 h-76 mb-30 overflow-hidden">
                    {Movie &&
                        Movie.map((movie, index) => (
                            <Card
                                key={movie._id}
                                title={movie.title}
                                description={`${movie.release_date} ${movie.genres}`}
                                src="https://imgs.search.brave.com/kFdmmW_MKtrNxu9vgsUtKnuQjFu_myT5mFJmTn8aHGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3LmFscGhhY29k/ZXJzLmNvbS81MTgv/dGh1bWJiaWctNTE4/NzgzLndlYnA"
                            />
                        ))}
                </div>
            </div>
        </main>
    );
}

export default Home
