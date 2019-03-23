import React from 'react';
import { Link } from '@reach/router';
import { Store, getRestaurants } from '../../store/store';
import { retrieveAllRestaurants } from '../../utils/api';

const Restaurants = () => {
  const { state, dispatch } = React.useContext(Store);
  const { data, error } = getRestaurants(state);

  React.useEffect(() => {
    if (!data) {
      retrieveAllRestaurants(dispatch);
    }
  }, []);

  if (error) {
    return <p>Looks like there was an error. Here is what it says: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/restaurant/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Restaurants;
