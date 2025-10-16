/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import Card from './Card'
// import { Link } from 'react-router-dom';



// const Display = (props) => {



//     // Specify image URLs directly in the movie objects for convenience
//     const movies = [
//         { id: 1, title: "Movie 1" /* other props */ },
//         { id: 2, title: "Movie 2" /* other props */ },
//         { id: 3, title: "Movie 3" /* other props */ },
//         { id: 4, title: "Movie 4" /* other props */ },
//         { id: 5, title: "Movie 5" /* other props */ },
//     ];


//     // Use presetEndpoint from props, default to empty string if not provided


//     // Generate endpoint based on props.heading

//     return (
//         <div className="h-auto">
//             <div className='flex justify-between items-center h-auto'>
//                 <h1 className="text-2xl font-bold">{props.heading}</h1>
//                 {props.btn && props.btn.trim() !== "" ? (
//                     <button
//                         className='rounded-xl p-2 bg-[#483e23]/30 cursor-pointer'
//                         disabled={false}
//                         style={{ display: "inline-block" }}
//                     >
//                         <Link to={props.heading}>
//                             {props.btn}
//                         </Link>
//                     </button>
//                 ) : (
//                     <button
//                         disabled={true}
//                         style={{ display: "none" }}
//                     />
//                 )}
//             </div>


//             <div className="flex h-100 items-start justify-start scrollbar-hide">
//                 {movies.map(movie => (
//                     <Card key={movie._id} {...movie} src={props.src} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Display





import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Display = ({ heading, btn }) => {
    const [movies, setMovies] = useState([]);
    const [movies1, setMovies1] = useState([])


    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/movies?genre=${heading}&limit=5`);
            setMovies(res.data);
        };
        fetchMovies();
    }, [heading]);



    const fetchMov = async () => {
        let r = await fetch(`${import.meta.env.VITE_API_BASE_URL}/`);
        const res = await r.json();
        if (res.data) {
            setMovies1(res.data);
            console.log(res.data);
        } else {
            console.log("Data is not fetched");
        }
    }


    useEffect(() => {
        fetchMov();
    }, [])
    

    return (
        <div className="mb-10 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">{heading}</h2>
                {btn && btn.trim() !== "" ? (
                    <button
                        className='rounded-xl p-2 bg-[#483e23]/30 cursor-pointer'
                        disabled={false}
                        style={{ display: "inline-block" }}
                    >
                        <Link to={heading}>
                            {btn}
                        </Link>
                    </button>
                ) : (
                    <button
                        disabled={true}
                        style={{ display: "none" }}
                    />
                )}
            </div>






            <div className="flex gap-4 overflow-x-auto scrollbar-hide overflow-y-hidden h-95">
                {movies.map(movie => (
                    <Card key={movie._id} {...movie} description={`${movie.release_date} ${movie.genres}`} />
                ))}
            </div>
        </div>
    );
};

export default Display;
