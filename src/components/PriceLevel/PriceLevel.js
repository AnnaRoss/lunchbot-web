import React from 'react';
import { ReactComponent as DollarSign } from '../../assets/icons/dollar-sign-solid.svg';
import styles from './PriceLevel.module.scss';

const PriceLevel = ({ level }) => {
  let emptySlotsForIcons = new Array(level).fill(null);

  return (
    <div
      className={styles.wrapper}
      aria-label={`Estimated price level: ${level}`}
    >
      {emptySlotsForIcons.map((_, i) => (
        <div key={i} className={styles.dollarSign}>
          <DollarSign />
        </div>
      ))}
    </div>
  );
};

export default PriceLevel;
