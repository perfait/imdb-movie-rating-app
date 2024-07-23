export const fetchMovies = async () =>{
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTViMzZiZjdhNDcyZGUwMzJkOGQzNDI0ZTU3ZWY3YiIsIm5iZiI6MTcyMTEwOTk0My40MTU2NCwic3ViIjoiNjY5NjBjZWQ1NTgwZjAyYWQ4Y2I4YWM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4LrADWrzmCK3hQ8pMpYFPBX43-UhMJ0lvo9YnuqRxIA"
            
            },
        }
    );

    const data = await res.json();
    console.log(data);
    return data;
};


export const fetchTvShows = async () =>{
    const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTViMzZiZjdhNDcyZGUwMzJkOGQzNDI0ZTU3ZWY3YiIsIm5iZiI6MTcyMTEwOTk0My40MTU2NCwic3ViIjoiNjY5NjBjZWQ1NTgwZjAyYWQ4Y2I4YWM4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4LrADWrzmCK3hQ8pMpYFPBX43-UhMJ0lvo9YnuqRxIA"
            
            },
        }
    );

    const data = await res.json();
    console.log(data);
    return data;
};