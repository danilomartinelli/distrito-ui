import React from 'react';
import Lottie, { LottieProps } from 'react-lottie';
import { colorify } from 'lottie-colorify';
import animationData from './dots-loading';

interface DotsLoadingProps extends Omit<LottieProps, 'options'> {
  /** DotsLoading color variant */
  color?: 'white' | 'brand-600';
}

const COLORS = {
  white: [255, 255, 255],
  'brand-600': [204, 0, 87],
};

/** DotsLoading Lottie Animation */
export const DotsLoading = ({ color, ...rest }: DotsLoadingProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: color
      ? colorify([COLORS[color], COLORS[color], COLORS[color]], animationData)
      : animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} {...rest} />;
};
