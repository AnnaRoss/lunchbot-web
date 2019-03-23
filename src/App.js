import React from 'react';
import { retrieveAllRestaurants } from './utils/api';

const App = () => {
  React.useEffect(() => {
    retrieveAllRestaurants().then((list) => console.log(list));
  }, []);

  return <h1>LunchBot</h1>;
};

export default App;
