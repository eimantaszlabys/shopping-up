import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import image1 from './images/10084175.jpeg';
import image2 from './images/10211524.jpeg';
import image3 from './images/9852577.jpeg';
import image4 from './images/9489047.jpeg';

const Home: FunctionComponent = () => {
  return (
    <div>
      <h3 className={styles.subHeader}>Fashion house</h3>
      <h1 className={styles.header}>Fashion</h1>

      <div className={styles.subHeaderSection}>
        <img className={styles.image1} src={image1} alt="image1" />
        <img className={styles.image2} src={image2} alt="image2" />
        <img className={styles.image3} src={image3} alt="image3" />
        <img className={styles.image4} src={image4} alt="image4" />
      </div>
    </div>
  );
};

export { Home };
