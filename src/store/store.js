import React from 'react';
import { GET_RESTAURANTS_SUCCESS } from '../constants';

/**
 * A React Context object which will hold global data.
 * Read more? https://reactjs.org/docs/context.html
 */
export const Store = React.createContext('');

const initialState = {
  restaurants: [],
};

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(restaurantReducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
