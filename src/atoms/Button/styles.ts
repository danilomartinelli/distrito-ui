import styled, { css } from 'styled-components';
import { ButtonVariant } from '.';

export const StyledButton = styled.button<{
  smaller?: boolean;
  isLoading?: boolean;
  onlyIcon?: boolean;
  isRound?: boolean;
  withIcon?: boolean;
  isDisabled?: boolean;
  variant: ButtonVariant;
}>`
  padding: 0.7rem 1.6rem 0.9rem;
  outline: none;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  position: relative;
  box-shadow: none;

  &:hover,
  &:focus {
    transform: translateY(-0.2rem);
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
    border: none;
  }

  ${({ smaller }) =>
    smaller &&
    css`
      padding: 0.3rem 1.2rem 0.5rem;
    `}

  @media (prefers-reduced-motion: no-preference) {
    transition: 0.2s ease-in-out;
  }

  ${({ variant }) =>
    variant === 'raised' &&
    css`
      background-color: ${({ theme }) => theme.colors.brand.n500};
      color: ${({ theme }) => theme.colors.neutral.white};

      &:hover {
        box-shadow: 0 1rem 3.5rem -1rem #ff006d52;
      }

      &:focus {
        border: 0.1rem solid ${({ theme }) => theme.colors.brand.n200};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.brand.n600};
      }
    `}

  ${({ variant, isLoading }) =>
    isLoading &&
    variant === 'raised' &&
    css`
      color: ${({ theme }) => theme.colors.neutral.white};
    `}

    ${({ variant }) =>
    variant === 'outlined' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.neutral.n200};
      color: ${({ theme }) => theme.colors.brand.n500};

      &:hover {
        background-color: ${({ theme }) => theme.colors.brand.n100};
        border-color: ${({ theme }) => theme.colors.brand.n100};
        box-shadow: 0 1rem 3.5rem -1rem rgba(255, 235, 243, 0.8);
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.brand.n200};
        border-width: 0.2rem;
      }

      &:active {
        border-color: ${({ theme }) => theme.colors.brand.n600};
        color: ${({ theme }) => theme.colors.brand.n600};
        background-color: ${({ theme }) => theme.colors.neutral.white};
      }
    `}

    ${({ variant }) =>
    variant === 'link' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral.white};
      color: ${({ theme }) => theme.colors.brand.n500};
      border: 0.1rem solid ${({ theme }) => theme.colors.neutral.white};

      &:hover {
        color: ${({ theme }) => theme.colors.brand.n600};
      }

      &:focus {
        border-color: ${({ theme }) => theme.colors.brand.n200};
      }

      &:active {
        color: ${({ theme }) => theme.colors.brand.n700};
      }
    `}

    ${({ onlyIcon, isRound }) =>
    (onlyIcon || isRound) &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 4.8rem;
      height: 4.2rem;
    `}

    ${({ onlyIcon, isRound }) =>
    onlyIcon &&
    isRound &&
    css`
      width: 4.2rem;
    `}

    ${({ onlyIcon, smaller }) =>
    onlyIcon &&
    smaller &&
    css`
      width: 4rem;
      height: 3.2rem;
    `}

    ${({ withIcon }) =>
    withIcon &&
    css`
      display: flex;
      align-items: center;
    `}

    ${({ isRound }) =>
    isRound &&
    css`
      border-radius: 10rem;
    `}

    ${({ variant, isDisabled }) =>
    isDisabled &&
    variant === 'raised' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral.n200};
      color: ${({ theme }) => theme.colors.neutral.n500};
      cursor: not-allowed;
    `}

    ${({ variant, isDisabled }) =>
    isDisabled &&
    variant === 'outlined' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral.n100};
      color: ${({ theme }) => theme.colors.neutral.n500};
      border: 0.1rem solid ${({ theme }) => theme.colors.neutral.n300};
      cursor: not-allowed;
    `}
`;
