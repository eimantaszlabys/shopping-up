import React, { FunctionComponent, useState } from 'react';
import { isEqual } from 'lodash';
import styles from './styles.module.scss';

const Home: FunctionComponent = () => {
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkIfPalindrome = (originalValue: string) => {
    const revOriginalValue = [...originalValue].reverse().join('');

    setIsPalindrome(isEqual(originalValue, revOriginalValue));
  };

  return (
    <div className={styles.content}>
      <h1>{isPalindrome ? 'true' : 'false'}</h1>
      <input onChange={(e) => checkIfPalindrome(e.target.value)} />
    </div>
  );
};

export { Home };
