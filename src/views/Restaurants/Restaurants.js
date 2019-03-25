import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import {
  Store,
  getRestaurants,
  getCurrentSortBy,
  getCurrentSortOrder,
} from '../../store/store';
import { retrieveAllRestaurants } from '../../utils/api';
import styles from './Restaurants.module.scss';
import { SET_SORT_ORDER, SET_SORT_TYPE, SORT_TYPES } from '../../constants';
import Button from '../../components/Button/Button';
import SortingBar from '../../components/SortingBar/SortingBar';

const Restaurants = () => {
  const { state, dispatch } = React.useContext(Store);
  const { data, error } = getRestaurants(state);
  const { data: activeSorting } = getCurrentSortBy(state);
  const { data: sortDescending } = getCurrentSortOrder(state);

  React.useEffect(() => {
    if (!data) {
      retrieveAllRestaurants(dispatch);
    }
  }, []);

  if (error) {
    return <p>Looks like there was an error. Here is what it says: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  function byActiveSorting(a, b) {
    switch (activeSorting) {
      case SORT_TYPES.RATING:
        return sortDescending ? b.rating - a.rating : a.rating - b.rating;
      case SORT_TYPES.PRICE:
        // place last if null
        if (!a.price_level) {
          return 1;
        } else if (!b.price_level) {
          return -1;
        }

        return sortDescending
          ? b.price_level - a.price_level
          : a.price_level - b.price_level;
      default:
        return b.rating - a.rating;
    }
  }

  function setSortOrder() {
    dispatch({
      type: SET_SORT_ORDER,
    });
  }

  function setSortType(type) {
    dispatch({
      type: SET_SORT_TYPE,
      payload: type,
    });
  }

  return (
    <>
      <SortingBar>
        {Object.values(SORT_TYPES).map((type) => {
          return (
            <Button
              onClick={() => setSortType(type)}
              name={type}
              styling={type === activeSorting ? 'active' : 'inactive'}
            />
          );
        })}

        <Button
          onClick={() => setSortOrder()}
          name={sortDescending ? 'Ascending' : 'Descending'}
        />
      </SortingBar>

      <ul className={styles.list}>
        {data.sort(byActiveSorting).map((restaurant) => (
          <li className={styles.listItem} key={restaurant.id}>
            <RestaurantCard data={restaurant} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
