import config from "../config/config";
import axios from 'axios';

const movie_key = config.movie_key


export const popularMovies =async (page:number) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`
  const headers = {
    // withCredentials: true,
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

export const topRateMovies =async (page:number) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`
  const headers = {
    // withCredentials: true,
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

export const upcomingMovies =async (page:number) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${page}`
  const headers = {
    // withCredentials: true,
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