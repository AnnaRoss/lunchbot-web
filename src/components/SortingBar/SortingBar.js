import React from 'react';
import styles from './SortingBar.module.scss';

const SortingBar = ({ children, ...props }) => (
  <menu {...props} className={styles.wrapper}>
    <span>Sort by:</span>
    {children}
  </menu>
);

export default SortingBar;
