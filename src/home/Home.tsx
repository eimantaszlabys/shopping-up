import React, { FC } from 'react';
import { ProductInfo } from './productInfo';
import styles from './styles.module.css';

const Home: FC = () => {
  const products = [{
    title: 'Brown eggs',
    type: 'dairy',
    description: 'Raw organic brown eggs in a basket',
    filename: '0.jpg',
    height: 600,
    width: 400,
    price: 28.1,
    rating: 5,
  }, {
    title: 'Sweet fresh stawberry',
    type: 'fruit',
    description: 'Sweet fresh stawberry on the wooden table',
    filename: '1.jpg',
    height: 450,
    width: 299,
    price: 29.45,
    rating: 4,
  }, {
    title: 'Asparagus',
    type: 'vegetable',
    description: 'Asparagus with ham on the wooden table',
    filename: '2.jpg',
    height: 450,
    width: 299,
    price: 18.95,
    rating: 3,
  }, {
    title: 'Green smoothie',
    type: 'dairy',
    description: "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    filename: '3.jpg',
    height: 600,
    width: 399,
    price: 17.68,
    rating: 4,
  }, {
    title: 'Raw legums',
    type: 'vegetable',
    description: 'Raw legums on the wooden table',
    filename: '4.jpg',
    height: 450,
    width: 299,
    price: 17.11,
    rating: 2,
  }, {
    title: 'Baking cake',
    type: 'dairy',
    description: 'Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.',
    filename: '5.jpg',
    height: 450,
    width: 675,
    price: 11.14,
    rating: 4,
  }, {
    title: 'Pesto with basil',
    type: 'vegetable',
    description: 'Italian traditional pesto with basil, chesse and oil',
    filename: '6.jpg',
    height: 450,
    width: 299,
    price: 18.19,
    rating: 2,
  }, {
    title: 'Hazelnut in black ceramic bowl',
    type: 'vegetable',
    description: 'Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus',
    filename: '7.jpg',
    height: 450,
    width: 301,
    price: 27.35,
    rating: 0,
  }, {
    title: 'Fresh stawberry',
    type: 'fruit',
    description: 'Sweet fresh stawberry on the wooden table',
    filename: '8.jpg',
    height: 600,
    width: 399,
    price: 28.59,
    rating: 4,
  }];
  return (
    <div>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductInfo
            title={product.title}
            type={product.type}
            description={product.description}
            filename={product.filename}
            height={product.height}
            width={product.width}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export { Home };
