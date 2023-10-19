import React,{useEffect, useState} from 'react';
import PopularMovies from '../../components/popular_movies';


const Home = () => {
  
  return (
    <main>
      <h1>홈페이지</h1>
      <PopularMovies />
    </main>
  );
};

export default Home;