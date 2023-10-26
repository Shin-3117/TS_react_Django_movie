import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {

  return (
<footer className={styles.wrap}>
  <div className={styles.left}>
    <p className={styles.logo}>Typescript React Django Movie</p>
    <p>제작 : 신현중</p>
  </div>
  <div className={styles.left}>
    <a
      href="https://github.com/Shin-3117/TS_react_Django_movie"
      rel="noreferrer"
      target="_blank"
      className={styles.link}
      >
      https://github.com/Shin-3117/TS_react_Django_movie
    </a>
  </div>

</footer>
  );
};

export default Footer;
