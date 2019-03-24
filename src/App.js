import React from 'react';
import { Router } from '@reach/router';
import Restaurants from './views/Restaurants/Restaurants';
import Restaurant from './views/Restaurant/Restaurant';
import { H1 } from './components/Typography/Typography';

const App = () => {
  return (
    <div
      style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <H1>LunchBot</H1>
      <Router>
        <Restaurants exact path="/" />
        <Restaurant path="/restaurant/:id" />
      </Router>
    </div>
  );
};

export default App;
