import React, { forwardRef } from 'react';

import { DotsLoading, SearchLoupe, Close } from '../../index';
import { Typography } from '../Typography';

import * as S from './styles';

export type ButtonVariant = 'raised' | 'outlined' | 'link';

export type ButtonOnlyIconType = 'search' | 'close';

export type WithIconConfig = {
  /** Icon to display within button content */
  icon: React.ReactNode;
  /** Position of the icon to display */
  position: 'left' | 'right';
};

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  /** The label for the component to display */
  label?: string;
  /** The style variant for the component to display */
  variant?: ButtonVariant;
  /** The loading value to component do display a loader */
  isLoading?: boolean;
  /** The value to component do display rounder edges */
  isRound?: boolean;
  /** Icon to display as a button content */
  onlyIcon?: ButtonOnlyIconType | React.ReactNode;
  /** Icon to display within button content */
  withIcon?: WithIconConfig;
  /** Button small size */
  smaller?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label = '',
      variant = 'raised',
      isLoading = false,
      isRound = false,
      withIcon,
      onlyIcon,
      smaller,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    let content: React.ReactNode = (
      <Typography variant="button">{label}</Typography>
    );

    if (isLoading)
      content = (
        <DotsLoading
          width="3.4rem"
          height="auto"
          style={{ display: 'flex', alignItems: 'center' }}
          color={variant === 'raised' ? 'white' : 'brand-600'}
        />
      );

    if (withIcon) {
      const { icon, position } = withIcon;
      if (position === 'left')
        content = (
          <>
            {icon}
            <span style={{ marginLeft: 5 }}>
              <Typography variant="button">{label}</Typography>
            </span>
          </>
        );
      else
        content = (
          <>
            <span style={{ marginRight: 5 }}>
              <Typography variant="button">{label}</Typography>
            </span>
            {icon}
          </>
        );
    }

    if (onlyIcon === 'search') content = <SearchLoupe />;

    if (onlyIcon === 'close') content = <Close />;

    if (typeof onlyIcon === 'object') content = onlyIcon;

    return (
      <S.StyledButton
        ref={ref}
        type="button"
        disabled={disabled || isLoading}
        isDisabled={disabled || isLoading}
        variant={variant}
        smaller={smaller}
        isLoading={isLoading}
        onlyIcon={!!onlyIcon}
        isRound={isRound}
        withIcon={!!withIcon}
        {...rest}
      >
        {content}
      </S.StyledButton>
    );
  }
);
