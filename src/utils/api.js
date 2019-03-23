import { GET_RESTAURANTS_SUCCESS } from '../constants';

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
