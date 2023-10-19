import config from "../config/config";
import axios from 'axios';

const movie_key = config.movie_key
// const movie_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGJlNzkyNDhmNjFiOGU2ZGI5NmE4MWNlOTg3ZTYwZSIsInN1YiI6IjY0ZjA0NTRiM2E5OTM3MDExY2JkOTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZWN95zCwjdCYKKFpx1yFXOUKk-YSik0rmJGVoWFyQGk'


const popularMovies =async (page:number) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${movie_key}`
  }
  const set_axios ={
    method : 'get',
    url : url,
    headers : headers
  }
  const response = await axios(set_axios);
  return response.data
}

export default popularMovies;