import React from 'react';
import { Link } from '@reach/router';
import styles from './RestaurantCard.module.scss';
import Rating from '../Rating/Rating';
import PriceLevel from '../PriceLevel/PriceLevel';
import { H2 } from '../Typography/Typography';

const RestaurantCard = ({ data: { id, name, rating, price_level, photo } }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${photo})`,
            }}
          />
        </div>
        <H2>{name}</H2>
        <div className={styles.details}>
          <Rating rating={rating} />
          {price_level && <PriceLevel level={price_level} />}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
