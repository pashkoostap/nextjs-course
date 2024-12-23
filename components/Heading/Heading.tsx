import React from 'react';
import { THeadingProps } from './Heading.types';

import styles from './Heading.module.css';

const Heading = ({ children, variant }: THeadingProps) => {
  const Component = variant;

  return <Component className={styles[variant]}>{children}</Component>;
};

export default Heading;
