import { GET_RESTAURANTS_SUCCESS, GET_RESTAURANT_SUCCESS } from '../constants';

export const retrieveAllRestaurants = (dispatch) => {
  return fetch('/api/list')
    .then((response) => response.json())
    .then((restaurants) =>
      dispatch({
        type: GET_RESTAURANTS_SUCCESS,
        payload: restaurants,
      })
    )
    .catch((error) => console.error(error));
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
    .catch((error) => console.error(error));
};
