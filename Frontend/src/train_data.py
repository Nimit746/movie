import json
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load your JSON file
with open(r"C:\Users\sanjeevni\Desktop\movie recommendation system\sample_mflix.movies.json", encoding='utf-8') as f:
    data = json.load(f)

# Convert to DataFrame
df = pd.DataFrame(data)

# Check columns
print(f"Columns: {df.columns.tolist()}")

# Drop rows without required fields
df = df.dropna(subset=['title', 'plot', 'genres'])

# Combine features: title + plot + genres
df['content'] = (
    df['title'].astype(str) + ' ' +
    df['plot'].astype(str) + ' ' +
    df['genres'].astype(str)
)

# Vectorize using TF-IDF
vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = vectorizer.fit_transform(df['content'])

# Compute cosine similarity matrix
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Create a mapping from movie title to index
indices = pd.Series(df.index, index=df['title']).drop_duplicates()


def recommend(title, num_recommendations=5):
    if title not in indices:
        print(f"❌ Movie '{title}' not found in dataset.")
        return

    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    print(f"\n📽️ Recommendations for: {title}\n")
    count = 0
    for i, score in sim_scores[1:]:  # skip the movie itself
        movie_title = df.iloc[i]['title']
        print(f"{count+1}. {movie_title}  (Similarity: {score:.2f})")
        count += 1
        if count >= num_recommendations:
            break


# Example: recommend movies similar to "Final Destination"
recommend("Final Destination", num_recommendations=5)

# You can also prompt the user:
# movie = input("\nEnter a movie title: ")
# recommend(movie)
