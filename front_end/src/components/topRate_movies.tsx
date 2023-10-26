import React, { useEffect, useState } from 'react';
import {topRateMovies} from '../api/movies'
import styles from './movies.module.scss';

import ModalMovie from './modal_movie';

import Movie from '../interface';

const TopRateMovies = () => {
  const [movies, setMovies] = useState<Movie[] | null>([])

  useEffect(() => {
    const fetchData = async (page:number) => {
      const data = await topRateMovies(page)
      if(data.results){
        setMovies(data.results);
      }
    }
    fetchData(1)
  }, [])

  return (
    <>
    {movies && (
    <section className={styles.popularMoviesSection}>
      <h2>고평가 작품</h2>
        
      <div className={styles.popularMoviesContainer}>
        {/* <button type='button' className='btnL'>&lt;</button> */}

        { movies.map(movie => (
            <article className={styles.popularMovieCard}>
              <img className={styles.popularMovieImg} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
              <div className={styles.movieInfo}>
                <h3 key={movie.id}>{movie.title}</h3>
                <p>{movie.vote_average}</p>
                <ModalMovie movie={movie} />
              </div>
            </article>
        ))}

        {/* <button type='button' className='btnR'>&gt;</button> */}
      </div>

      
    </section>
    )}
    </>
  );
};

export default TopRateMovies;