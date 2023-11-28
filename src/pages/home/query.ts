export const fetchMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US?page=1",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWIwMTMzMDNjNTk3YWQ2NmNkNzFjZmQ0OGVlMzkyNyIsInN1YiI6IjY0ZTdjMWU4YzYxM2NlMDE0ZGZiOTkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-SQ35GRZw1Em7n0tHVY6lb5tfUwWQbM8uRem94NUY"
            },
        }
    )
    return res.json()
}

export const fetchTvShows = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US?page=1",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWIwMTMzMDNjNTk3YWQ2NmNkNzFjZmQ0OGVlMzkyNyIsInN1YiI6IjY0ZTdjMWU4YzYxM2NlMDE0ZGZiOTkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-SQ35GRZw1Em7n0tHVY6lb5tfUwWQbM8uRem94NUY"
            },
        }
    )
    return res.json()
}