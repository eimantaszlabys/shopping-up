import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import image1 from './images/10084175.jpeg';
import image2 from './images/10211524.jpeg';
import image3 from './images/9852577.jpeg';
import image4 from './images/9489047.jpeg';
import image5 from './images/10161997.jpeg';

const Home: FunctionComponent = () => {
  const customItems = [
    {
      number: '01',
      info: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    },
    {
      info: '​The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS. '
    },
    {
      number: '02',
      info: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    },
    {
      info: '​The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS. '
    },
    {
      number: '03',
      info: 'Sample text. Click to select the text box. Click again or double click to start editing the text.'
    }
  ];

  return (
    <>
      <h3 className={styles.subHeader}>Fashion house</h3>
      <h1 className={styles.header}>Fashion</h1>

      <div className={classnames(styles.part1gridSection, styles.part1grid)}>
        <img className={styles.image1} src={image1} alt="image1" />
        <img className={styles.image2} src={image2} alt="image2" />
        <img className={styles.image3} src={image3} alt="image3" />
        <img className={styles.image4} src={image4} alt="image4" />
      </div>

      <div className={classnames(styles.part2gridSection, styles.part2grid)}>
        <img className={styles.image5} src={image5} alt="image5" />
        <h2 className={styles.header}>
          ​We collaborate with brands and agencies to create memorable experiences.
        </h2>
        <div className={styles.infoSection}>
          {customItems.map((item) => (
            <div className={styles.info}>
              <p>{item.info}</p>
              {item.number && <div className={styles.sectionNumber}>{item.number}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { Home };
