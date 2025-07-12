



import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card.jsx"

const Searchbar = () => {
    const [query, setQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    // Debounce user input
    useEffect(() => {   
        const handler = setTimeout(() => {
            setDebouncedQuery(query.trim())
        }, 500)

        return () => clearTimeout(handler)
    }, [query])

    // Fetch search results when query changes
    useEffect(() => {
        if (!debouncedQuery) {
            setSearchResults([])
            setRecommendations([])
            setSelectedMovie(null)
            return
        }

        const fetchResults = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(`http://localhost:3000/api/movies/search?title=${debouncedQuery}`)
                console.log('🔍 Search Results:', res.data)
                setSearchResults(res.data)

                if (res.data.length > 0) {
                    // Try exact match first
                    const exactMatch = res.data.find(m => m.title.toLowerCase() === debouncedQuery.toLowerCase())
                    const movieToRecommend = exactMatch || res.data[0]

                    console.log(`🎯 Recommending for: ${movieToRecommend.title}`)
                    await fetchRecommendations(movieToRecommend.title)
                }
            } catch (err) {
                console.error('❌ Search failed:', err)
                setSearchResults([])
                setRecommendations([])
            } finally {
                setIsLoading(false)
            }
        }

        fetchResults()
    }, [debouncedQuery])

    const fetchRecommendations = async (title) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/recommend?title=${encodeURIComponent(title)}&limit=6`)
            if (res.data.success) {
                setRecommendations(res.data.recommendations)
                setSelectedMovie(res.data.targetMovie)
            } else {
                setRecommendations([])
                setSelectedMovie(null)
            }
        } catch (err) {
            console.error('❌ Recommendation fetch failed:', err)
            setRecommendations([])
            setSelectedMovie(null)
        }
    }

    const clearSearch = () => {
        setQuery('')
        setSearchResults([])
        setRecommendations([])
        setSelectedMovie(null)
    }

    return (
        <div className="w-full">
            {/* Search Input */}
            <div className="w-[80vw] mx-auto">
                <div className="w-[60vw] bg-[#483e23] mx-auto my-10 p-2 rounded-lg flex gap-2">
                    <Search className="text-white" />
                    <input
                        placeholder="Search Movies"
                        type="text"
                        className="w-full focus:outline-none text-white bg-transparent"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button onClick={clearSearch} className="text-white hover:text-gray-300 px-2">✕</button>
                    )}
                </div>
            </div>

            {/* Loading Indicator */}
            {isLoading && (
                <div className="text-center text-white py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                    <p className="mt-2">Searching...</p>
                </div>
            )}

            {/* Search Results */}
            {searchResults.length > 0 && !isLoading && (
                <div className="w-[80vw] mx-auto mb-30">
                    <h2 className="text-2xl font-bold text-white mb-4">Search Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {searchResults.map(movie => (
                            <Card
                                key={movie._id}
                                title={movie.title}
                                description={`${movie.release_date || 'N/A'} • ${movie.genres || 'Unknown'}`}
                                src={movie.poster_path || 'https://via.placeholder.com/300x450?text=No+Image'}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Recommendations */}
            {recommendations.length > 0 && selectedMovie && (
                <div className="w-[80vw] mx-auto mb-30">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Because you searched for "{selectedMovie.title}"
                        </h2>
                        {selectedMovie.genres && (
                            <p className="text-sm text-gray-400 mb-4">
                                Similar genres: {selectedMovie.genres}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {recommendations.map(movie => (
                            <Card
                                key={movie._id}
                                title={movie.title}
                                description={`${movie.release_date || 'N/A'} • ${movie.genres || 'Unknown'}`}
                                src={movie.poster_path || 'https://via.placeholder.com/300x450?text=No+Image'}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* No Results */}
            {debouncedQuery && searchResults.length === 0 && !isLoading && (
                <div className="text-center text-white py-8">
                    <p className="text-xl">No movies found for "{debouncedQuery}"</p>
                    <p className="text-gray-400 mt-2">Try searching with different keywords</p>
                </div>
            )}
        </div>
    )
}

export default Searchbar