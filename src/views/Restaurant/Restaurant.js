import React from 'react';
import { Store, getRestaurantById } from '../../store/store';
import { retrieveRestaurantById } from '../../utils/api';

const Restaurant = ({ id }) => {
  const { state, dispatch } = React.useContext(Store);
  const { data, error } = getRestaurantById(state, id);

  React.useEffect(() => {
    if (!data) {
      retrieveRestaurantById(dispatch, id);
    }
  }, []);

  if (error) {
    return <p>Looks like there was an error. Here is what it says: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <h1>{data.name}</h1>;
};

export default Restaurant;
