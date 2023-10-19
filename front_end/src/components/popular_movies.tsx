import React, { useEffect, useState } from 'react';
import popularMovies from '../api/popular'
import './popular_movies.css';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[] | null>([])
  useEffect(() => {
    const fetchData = async (page:number) => {
      const data = await popularMovies(page)
      // console.log(data)
      // console.log(data.results[0])
      if(data.results){
        setMovies(data.results);
      }
      
    }
    fetchData(1)
  }, [])
  return (
    <>
    {movies && (
      <section>
        <h2>유행중인 영화</h2>
        <div className='popularMoviesContainer'>
          {movies.map(movie => (
            <article className='popularMovieCard'>
            <img className='popularMovieImg' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
            <div className='movieInfo'>
            <h3 key={movie.id}>{movie.title}</h3>
            <p>{movie.vote_average}</p>
            </div>
            </article>
          ))}
        </div>
      </section>
      )}
    </>
  );
};

export default PopularMovies;