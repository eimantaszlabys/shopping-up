import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';

const Home: FunctionComponent = () => {
  return (
    <>
      <div className={styles.menu}>
        <button>Menu</button>
      </div>
      <div className={styles.content}>
        <h1>IT Services</h1>
        <h3>We Provide Outsourced</h3>
        <h3>for Small & Mid-sized Businesses</h3>
      </div>
    </>
  );
};

export { Home };
