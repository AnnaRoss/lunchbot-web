import React from 'react';
import styles from './Restaurant.module.scss';
import { Store, getRestaurantById } from '../../store/store';
import { retrieveRestaurantById } from '../../utils/api';
import CardImage from '../../components/CardImage/CardImage';
import PriceLevel from '../../components/PriceLevel/PriceLevel';
import Rating from '../../components/Rating/Rating';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import { H2, ExternalTextLink } from '../../components/Typography/Typography';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icons/external-link-alt-solid.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone-solid.svg';
import { ReactComponent as MapMarkerIcon } from '../../assets/icons/map-marker-alt-solid.svg';

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
        <span className={styles.iconWrapper}>
          <ExternalLinkIcon />
        </span>
        <ExternalTextLink url={data.website}>{data.website}</ExternalTextLink>
      </div>

      <div className={styles.details}>
        <span className={styles.iconWrapper}>
          <MapMarkerIcon />
        </span>

        <div className={`${styles.details} ${styles.flexColumn}`}>
          <ExternalTextLink url={data.google_maps_url}>
            View location in Google Maps
          </ExternalTextLink>
          <p className={styles.address}>{data.address}</p>
        </div>
      </div>

      <div className={`${styles.details} ${styles.flexColumn}`}>
        <OpeningHours data={data.opening_hours} />
      </div>

      <div className={styles.details}>
        <span className={styles.iconWrapper}>
          <PhoneIcon />
        </span>
        <a href={`tel:${data.phone_number}`}>{data.phone_number}</a>
      </div>
    </section>
  );
};

export default Restaurant;
