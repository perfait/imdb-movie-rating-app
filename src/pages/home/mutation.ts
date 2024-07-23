export const rateMovie = async (movieId: number, rating: number) => {
    const guestSessionId = localStorage.getItem("guest_session_id");
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${guestSessionId}&api_key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({ value: rating })
        }
    );

    const data = await res.json();
    console.log(data);
    return data;
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
    const guestSessionId = localStorage.getItem("guest_session_id");
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${guestSessionId}&api_key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({ value: rating })
        }
    );

    const data = await res.json();
    console.log(data);
    return data;
};
