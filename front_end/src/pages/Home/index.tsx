
import PopularMovies from '../../components/popular_movies';
import TopRateMovies from '../../components/topRate_movies';
import UpcomingMovies from '../../components/upcoming_movies';
import styles from './Home.module.scss';

const Home = () => {
  
  return (
    <main className={styles.wrap}>
      <PopularMovies />
      <TopRateMovies/>
      <UpcomingMovies/>
    </main>
  );
};

export default Home;