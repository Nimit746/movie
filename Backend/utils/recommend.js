// utils/recommend.js

export function buildRecommendationEngine(movies) {
    return {
        recommend(title, limit = 5) {
            const target = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
            if (!target) return [];

            const getGenres = g => g?.split(',').map(x => x.trim().toLowerCase()) || [];

            return movies
                .filter(m => m.title !== target.title)
                .map(m => {
                    const score = calculateSimilarity(getGenres(m.genres), getGenres(target.genres));
                    return { ...m.toObject(), similarity: score };
                })
                .sort((a, b) => b.similarity - a.similarity)
                .slice(0, limit);
        }
    };
}

function calculateSimilarity(genresA, genresB) {
    const intersection = genresA.filter(g => genresB.includes(g));
    const union = new Set([...genresA, ...genresB]);
    return intersection.length / union.size || 0;
}