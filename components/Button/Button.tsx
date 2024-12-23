import React from 'react';
import { TButtonProps } from './Button.types';

import styles from './Button.module.css';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  className,
  ...props
}: TButtonProps) => (
  <button
    className={classNames(
      styles.base,
      styles[variant],
      styles[size],
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
