import React from 'react';
import styles from './CardImage.module.scss';

const CardImage = ({ url }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
    </div>
  );
};

export default CardImage;
