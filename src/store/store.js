import React from 'react';
import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  GET_RESTAURANT_FAILURE,
  SET_SORT_TYPE,
  SET_SORT_ORDER,
  SORT_TYPES,
} from '../constants';

/**
 * A React Context object which will contain the app's data.
 * Read more? https://reactjs.org/docs/context.html
 */
export const Store = React.createContext('');

const initialState = {
  error: null,
  restaurants: null,
  byId: {},
  sortType: SORT_TYPES.RATING,
  sortDescending: true,
};

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        error: null,
        restaurants: action.payload,
      };
    case GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        error: null,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case GET_RESTAURANT_FAILURE:
    case GET_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortDescending: !state.sortDescending,
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

/* Selectors for reading data from the store */
export const getRestaurantById = (state, id) => ({
  data: state.byId[id],
  error: state.error,
});

export const getRestaurants = (state) => ({
  data: state.restaurants,
  error: state.error,
});

export const getCurrentSortBy = (state) => ({
  data: state.sortType,
});

export const getCurrentSortOrder = (state) => ({
  data: state.sortDescending,
});
