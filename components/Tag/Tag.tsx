import React from 'react';

import styles from './Tag.module.css';
import { TTagProps } from './Tag.types';
import classNames from 'classnames';

const Tag = ({ children, variant = 'contained' }: TTagProps) => (
  <div className={classNames(styles.base, styles[variant])}>{children}</div>
);

export default Tag;
