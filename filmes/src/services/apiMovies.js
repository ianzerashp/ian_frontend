const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjk0NjY0MGM0OWRiYjNkZWFkYzYzOGM5OTViNjBkZCIsIm5iZiI6MTcyNTU3Nzc2Ni44OTYxNywic3ViIjoiNjZkMGY4MGQ5YjI2MTE0ZmUxMDE5YWMwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-yTvZvd0hwvwnqvf32DDib0wMXK6UxaTvaB-O7ehQ4I'
    }
})

export default apiMovie