/* eslint-disable no-unused-vars */
import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card.jsx";

const Searchbar = () => {

    const [query, setQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')
    const [result, setResult] = useState([])


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler)
        }
    }, [query])



    useEffect(() => {

        if (!debouncedQuery.trim()) {
            setResult([])
            return
        }

        const fetchres = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/movies/search?title=${debouncedQuery}`)
                setResult(res.data);
            } catch (err) {
                console.error('Search Failed: ', err)
            }
        }

        fetchres();
    }, [debouncedQuery])






    return (
        <div>
            <div className="w-[80vw] mx-auto">
                <div className="w-[60vw] bg-[#483e23] mx-auto my-10 p-2 rounded-lg flex gap-2">
                    <Search className="text-white" />
                    <input
                        placeholder="Search Movies"
                        type="search"
                        className="w-full focus:outline-none text-white"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>


            {result.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-30">
                    {result.map(movie => (
                        <Card
                            key={movie._id}
                            title={movie.title}
                            description={movie.release_date}
                            src={movie.poster_path || 'https://via.placeholder.com/150'}
                        />
                    ))}
                </div>
            )}


            


        </div>
    )
}

export default Searchbar
