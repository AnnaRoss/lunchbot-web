import React from 'react';
import { Link } from '@reach/router';

const RestaurantCard = ({ data: { id, name, rating, price_level, photo } }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div>
        <div
          style={{
            width: '320px',
            height: '160px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${photo})`,
          }}
        />
        <h2>{name}</h2>
        <span>{rating}</span>
        <span>{price_level && price_level}</span>
      </div>
    </Link>
  );
};

export default RestaurantCard;
