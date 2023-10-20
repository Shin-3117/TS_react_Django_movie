import React, { useEffect, useState } from 'react';
import popularMovies from '../api/popular'
import styles from './popular_movies.module.scss';

import Modal_movie from './modal_movie';

import Movie from '../interface';

const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[] | null>([])

  useEffect(() => {
    const fetchData = async (page:number) => {
      const data = await popularMovies(page)
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
      <h2>유행중인 영화</h2>
        
      <div className={styles.popularMoviesContainer}>
        {/* <button type='button' className='btnL'>&lt;</button> */}

        { movies.map(movie => (
            <article className={styles.popularMovieCard}>
              <img className={styles.popularMovieImg} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title} />
              <div className={styles.movieInfo}>
                <h3 key={movie.id}>{movie.title}</h3>
                <p>{movie.vote_average}</p>
                <Modal_movie movie={movie} />
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

export default PopularMovies;