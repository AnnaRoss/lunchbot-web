import React from 'react';
import { Router } from '@reach/router';
import Restaurants from './views/Restaurants/Restaurants';
import Restaurant from './views/Restaurant/Restaurant';
import { H1 } from './components/Typography/Typography';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <H1>LunchBot</H1>
      <Router>
        <Restaurants exact path="/" />
        <Restaurant path="/restaurant/:id" />
      </Router>
    </Wrapper>
  );
};

export default App;
