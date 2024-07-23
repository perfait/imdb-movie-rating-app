export const mutationLogin = async () =>{
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
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