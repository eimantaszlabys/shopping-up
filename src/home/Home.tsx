import React, { FunctionComponent } from 'react';
import { isArray } from 'lodash';
import styles from './styles.module.scss';

const Home: FunctionComponent = () => {
  const sections = [
    {
      image: 'Image',
      title: 'Copywriting',
      explanatory:
        'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    },
    {
      image: 'Image',
      title: 'Graphic Design',
      explanatory:
        'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    },
    {
      image: 'Image',
      title: 'Development',
      explanatory:
        'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    },
    {
      image: 'Images',
      title: 'Logisticdds',
      explanatory:
        'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    }
  ];

  return (
    <>
      <div>
        <button type="button">Menu</button>
      </div>
      <div className={styles.content}>
        <h1>ITd Services</h1>
        <h3>We Provide Outsourced</h3>
        <h3>for Small & Mid-sized Businesses</h3>
      </div>
      <div className={styles.sections}>
        {isArray(sections) &&
          sections.map(({ image, title, explanatory }) => (
            <div className={styles.section} key={title}>
              <div>{image}</div>
              <div className={styles.info}>
                <h1>{title}</h1>
                <span>{explanatory}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export { Home };
