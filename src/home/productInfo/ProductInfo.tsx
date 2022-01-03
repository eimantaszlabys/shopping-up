import React, { FC } from 'react';
import { ProductInfoProps } from './types';

const ProductInfo: FC<ProductInfoProps> = ({
  title, description, filename, price, rating,
}) => (
  <div>
    <img src={`/products/${filename}`} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
    <b>{price}</b>
    <div>{rating}</div>
  </div>
);
export { ProductInfo };
