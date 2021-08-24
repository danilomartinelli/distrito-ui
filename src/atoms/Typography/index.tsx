import React, { forwardRef } from 'react';

import * as S from './styles';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button'
  | 'label'
  | 'link1'
  | 'link2'
  | 'link3';

type HTMLTypographyElement =
  | HTMLHeadingElement
  | HTMLAnchorElement
  | HTMLSpanElement
  | HTMLParagraphElement;

export interface TypographyProps
  extends Omit<
    React.DetailedHTMLProps<
      React.AllHTMLAttributes<HTMLTypographyElement>,
      HTMLTypographyElement
    >,
    'ref'
  > {
  /** Semantic variant of the Typography */
  variant: TypographyVariant;
}

/** A Typography component. */
export const Typography = forwardRef<HTMLTypographyElement, TypographyProps>(
  ({ variant, children, className, ...rest }: TypographyProps, ref) => {
    let Tag: any = null;

    if (variant === 'link1' || variant === 'link2' || variant === 'link3') {
      Tag = S.a;
    } else if (
      variant === 'body1' ||
      variant === 'body2' ||
      variant === 'body3'
    ) {
      Tag = S.p;
    } else if (variant === 'button') {
      Tag = S.span;
    } else {
      Tag = S[variant];
    }

    return (
      <Tag
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as React.RefObject<any>}
        variant={variant}
        {...(rest as React.AllHTMLAttributes<HTMLTypographyElement>)}
      >
        {children}
      </Tag>
    );
  }
);
