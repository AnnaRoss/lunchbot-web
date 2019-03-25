import React from 'react';
import styles from './OpeningHours.module.scss';

const OpeningHours = ({ data }) => {
  return (
    <div className={styles.listWrapper}>
      <p>Opening Hours</p>
      <ul className={styles.list}>
        {data.map((dayString) => {
          const end = dayString.indexOf(':');
          const day = dayString.substring(0, end);
          const hours = dayString.substring(end + 2);

          return (
            <li
              key={`op-${day}`}
              className={styles.listItemWrapper}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span className={styles.day}>{day}</span>
              <span className={styles.hours}>{hours}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OpeningHours;
