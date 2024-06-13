import { css, styled } from 'styled-components';
import { ButtonCSS, DisabledButtonCSS, ActiveButtonCSS } from './Button';
/**
 * Themed button CSS generator
 *
 * @param {string} cssVarRoot - CSS variable root for the themed button
 * i.e.: --button-primary. The root is used to generate several CSS variables.
 *
 * You need to provide the following variables in your CSS (examples based on
 * the '--button-primary' root above). Some default values are provided in case
 * you don't provide them in your CSS:
 *
 * --button-primary-background-color
 * --button-primary-background-color-hover
 * --button-primary-border-color
 * --button-primary-border-color-hover
 * --button-primary-color
 * --button-primary-color-hover
 * --button-primary-background-color-disabled
 * --button-primary-border-color-disabled
 * --button-primary-color-disabled
 */
export const ButtonVariantCSS = css `
  ${({ $cssVarRoot }) => css `
    background-color: var(${$cssVarRoot}-background-color, #ccc);
    border-color: var(${$cssVarRoot}-border-color, #ccc);
    color: var(${$cssVarRoot}-color, #000);

    &:hover {
      background-color: var(${$cssVarRoot}-background-color-hover, #aaa);
      border-color: var(${$cssVarRoot}-border-color-hover, #aaa);
      color: var(${$cssVarRoot}-color-hover, #000);
    }

    &[disabled],
    &[disabled]:hover {
      background-color: var(
        ${$cssVarRoot}-background-color-disabled,
        ${$cssVarRoot}-background-color,
        #ccc
      );
      border-color: var(${$cssVarRoot}-border-color-disabled, ${$cssVarRoot}-border-color, #ccc);
      color: var(${$cssVarRoot}-color-disabled, ${$cssVarRoot}-color, #000);
    }
  `}
`;
/**
 * Base themed button component
 */
const ThemedButton = styled.button `
  /**
   * You can use a combination of these to make any component look like a button
   */
  ${ButtonCSS}
  ${ActiveButtonCSS}
  ${DisabledButtonCSS}
  ${ButtonVariantCSS}
`;
ThemedButton.defaultProps = {
    className: 'dbuitkThemedButton',
    type: 'button',
};
export default ThemedButton;
