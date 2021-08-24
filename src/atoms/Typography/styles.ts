import styled, { css } from 'styled-components';
import { TypographyVariant } from '.';

export const h1 = styled.h1`
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 2.4rem;
  line-height: 3.8rem;
`;

export const h2 = styled.h2`
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 2rem;
  line-height: 3.2rem;
`;

export const h3 = styled.h3`
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

export const h4 = styled.h4`
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.6rem;
  line-height: 2.5rem;
`;

export const h5 = styled.h5`
  color: inherit;
  font-family: 'Red Hat Display', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const p = styled.p<{ variant: TypographyVariant }>`
  color: inherit;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};

  ${({ variant }) =>
    variant === 'body1' &&
    css`
      font-size: 1.6rem;
      line-height: 2.5rem;
    `}

  ${({ variant }) =>
    variant === 'body2' &&
    css`
      font-size: 1.4rem;
      line-height: 2.2rem;
    `}

  ${({ variant }) =>
    variant === 'body3' &&
    css`
      font-size: 1.2rem;
      line-height: 1.9rem;
    `}
`;

export const label = styled.label`
  color: inherit;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

export const a = styled.a<{ variant: TypographyVariant }>`
  color: ${({ theme }) => theme.colors.brand.n600};
  font-family: 'Lato', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ variant }) =>
    variant === 'link1' &&
    css`
      font-size: 1.6rem;
      line-height: 2.5rem;
    `}

  ${({ variant }) =>
    variant === 'link2' &&
    css`
      font-size: 1.4rem;
      line-height: 2.2rem;
    `}

    ${({ variant }) =>
    variant === 'link3' &&
    css`
      font-size: 1.2rem;
      line-height: 1.9rem;
    `}
`;

export const span = styled.span`
  color: inherit;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.6rem;
  line-height: 2.5rem;
`;
