import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export type TTagProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  PropsWithChildren<{
    variant?: 'contained' | 'outlined';
  }>;
