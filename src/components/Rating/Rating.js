import React from 'react';
import styles from './Rating.module.scss';
import { ReactComponent as Star } from '../../assets/icons/star-solid.svg';
import { InfoLabelText } from '../Typography/Typography';

const Rating = ({ rating }) => (
  <div className={styles.wrapper}>
    <span className={styles.number}>
      <InfoLabelText aria-label={`Rating: ${rating}`}>{rating}</InfoLabelText>
    </span>
    <div className={styles.star}>
      <Star />
    </div>
  </div>
);

export default Rating;
