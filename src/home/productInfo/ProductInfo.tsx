import React, { FC } from 'react';
import classnames from 'classnames';
import { ProductInfoProps } from './types';
import styles from './styles.module.css';

const ProductInfo: FC<ProductInfoProps> = ({
  title, description, filename, price,
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div className={classnames(styles.card, styles.stacked)}>
      <img className={styles.img} src={`/products/${filename}`} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{formatter.format(price)}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export { ProductInfo };
