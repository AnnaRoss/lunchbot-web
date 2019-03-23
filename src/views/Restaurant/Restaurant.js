import React from 'react';
import { Store } from '../../store/store';
import { retrieveRestaurantById } from '../../utils/api';

const Restaurant = ({ id }) => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    retrieveRestaurantById(dispatch, id);
  }, []);

  return <h1>{id}</h1>;
};

export default Restaurant;
