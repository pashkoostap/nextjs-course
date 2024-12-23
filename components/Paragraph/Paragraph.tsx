import React from 'react';
import { TParagraphProps } from './Paragraph.types';

import styles from './Paragraph.module.css';
import classNames from 'classnames';

const Paragraph = ({ children, variant = 'body1' }: TParagraphProps) => (
  <p className={classNames(styles.base, styles[variant])}>{children}</p>
);

export default Paragraph;
