import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_FAILURE,
  GET_RESTAURANTS_FAILURE,
} from '../constants';

export const retrieveAllRestaurants = (dispatch) => {
  return fetch('/api/list')
    .then((response) => response.json())
    .then((restaurants) =>
      dispatch({
        type: GET_RESTAURANTS_SUCCESS,
        payload: restaurants,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_RESTAURANTS_FAILURE,
        payload: error.message,
      })
    );
};

export const retrieveRestaurantById = (dispatch, id) => {
  return fetch(`/api/restaurant/${id}`)
    .then((response) => response.json())
    .then((restaurant) =>
      dispatch({
        type: GET_RESTAURANT_SUCCESS,
        payload: restaurant,
      })
    )
    .catch((error) => {
      dispatch({
        type: GET_RESTAURANT_FAILURE,
        payload: error.message,
      });
    });
};
