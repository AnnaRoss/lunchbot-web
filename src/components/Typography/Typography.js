import React from 'react';
import styles from './Typography.module.scss';

export const H1 = ({ children, ...props }) => (
  <h1 className={styles.heading1} {...props}>
    {children}
  </h1>
);

export const H2 = ({ children, ...props }) => (
  <h2 className={styles.heading2} {...props}>
    {children}
  </h2>
);

export const InfoLabelText = ({ children, ...props }) => (
  <p className={styles.infoLabelText} {...props}>
    {children}
  </p>
);

export const ExternalTextLink = ({ url, children, ...props }) => (
  <a
    className={styles.externalLink}
    href={`${url}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);
