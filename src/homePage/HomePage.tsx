import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import styles from './styles.module.scss';

const HomePage: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classnames(styles.content, isActive && styles.isActive)}>
      <div>a</div>
      <button type="button" onClick={() => setIsActive((x) => !x)}>
        aaa
      </button>
    </div>
  );
};

export { HomePage };
