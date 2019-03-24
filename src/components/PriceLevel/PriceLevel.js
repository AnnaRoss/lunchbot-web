import React from 'react';
import { ReactComponent as DollarSign } from '../../assets/icons/dollar-sign-solid.svg';
import styles from './PriceLevel.module.scss';

const PriceLevel = ({ level }) => {
  let icons = [null, null, null, null];

  icons.fill(
    <div className={styles.dollarSign}>
      <DollarSign />
    </div>,
    0,
    level
  );

  return (
    <div
      className={styles.wrapper}
      aria-label={`Estimated price level: ${level}`}
    >
      {icons}
    </div>
  );
};

export default PriceLevel;
