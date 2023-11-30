export const rateMovie = async (movieId: number, rating: number) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}&api_key=`
        {
            headers: {
                accept: "application/json",
                "content-type": "application/json;charset=utf-8",
            },
        }
    )
    return res.json()
}

export const rateTvShow = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWIwMTMzMDNjNTk3YWQ2NmNkNzFjZmQ0OGVlMzkyNyIsInN1YiI6IjY0ZTdjMWU4YzYxM2NlMDE0ZGZiOTkwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-SQ35GRZw1Em7n0tHVY6lb5tfUwWQbM8uRem94NUY"
            },
        }
    )
    return res.json()
}