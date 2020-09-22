import { css } from 'styled-components';
import { window } from 'browser-monads';

export function isMobile() {
  let mobile = false; // initiate as false
  // device detection
  if (/Mobi/.test(window.navigator.userAgent)) {
    mobile = true;
  }
  return mobile;
}

const size = {
  small: 600,
  medium: 960,
  large: 1140,
};

export const Above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
