import React from 'react';
import { Link } from '@reach/router';
import { Store } from '../../store/store';
import { retrieveAllRestaurants } from '../../utils/api';

const Restaurants = () => {
  const {
    state: { restaurants },
    dispatch,
  } = React.useContext(Store);

  React.useEffect(() => {
    retrieveAllRestaurants(dispatch);
  }, []);

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/restaurant/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Restaurants;
