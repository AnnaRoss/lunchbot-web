import React from 'react';
import styles from './Restaurant.module.scss';
import { Store, getRestaurantById } from '../../store/store';
import { retrieveRestaurantById } from '../../utils/api';
import CardImage from '../../components/CardImage/CardImage';
import PriceLevel from '../../components/PriceLevel/PriceLevel';
import Rating from '../../components/Rating/Rating';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import { H2, ExternalTextLink } from '../../components/Typography/Typography';

const Restaurant = ({ id }) => {
  const { state, dispatch } = React.useContext(Store);
  const { data, error } = getRestaurantById(state, id);

  React.useEffect(() => {
    if (!data) {
      retrieveRestaurantById(dispatch, id);
    }
  }, []);

  if (error) {
    return <p>Looks like there was an error. Here is what it says: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.gridContainer}>
      <CardImage url={data.photo} />
      <H2>{data.name}</H2>

      <div className={styles.tags}>
        <Rating rating={data.rating} />
        {data.price_level && <PriceLevel level={data.price_level} />}
      </div>

      <div className={styles.details}>
        <ExternalTextLink url={data.website}>{data.website}</ExternalTextLink>
      </div>

      <div className={styles.details}>
        <ExternalTextLink url={data.google_maps_url}>
          View location in Google Maps
        </ExternalTextLink>
      </div>

      <div className={styles.details}>
        <OpeningHours data={data.opening_hours} />
      </div>

      <div className={styles.details}>
        <address>
          <p>{data.address}</p>
          <a href={`tel:${data.phone_number}`}>{data.phone_number}</a>
        </address>
      </div>
    </section>
  );
};

export default Restaurant;
