import React from 'react';
import { Store } from './store/store';
import { retrieveAllRestaurants } from './utils/api';

const App = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    retrieveAllRestaurants(dispatch);
  }, []);

  return <h1>LunchBot</h1>;
};

export default App;
