import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren<{
    variant?: 'contained' | 'outlined';
    size?: 'large' | 'medium' | 'small';
  }>;
