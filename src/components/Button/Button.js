import React from 'react';
import styles from './Button.module.scss';

const Button = ({ name, styling, ...props }) => (
  <button className={`${styles.default} ${styles[styling]}`} {...props}>
    {name}
  </button>
);

export default Button;
