import { css, styled } from 'styled-components'
import Button from './Button'

interface Props {
  $cssVarRoot?: string
}

/**
 * Themed button CSS generator
 */
export const ButtonVariantCSS = css<Props>`
  ${({ $cssVarRoot }) => css`
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
`

/**
 * Base themed button component
 *
 * @param {string} $cssVarRoot - CSS variable root for the themed button
 * i.e.: --button-primary. The root is used to dinamically generate several
 * CSS variables. For example: [$cssVarRoot]-background-color,
 * [$cssVarRoot]-border-color, etc.
 *
 * Based on the $cssVarRoot='--button-primary' example above, you'd need to
 * create the following variables in your CSS:
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
 *
 * See the examples in the page demo or in dAppBooster for further clarification.
 */
const ThemedButton = styled(Button).attrs<Props>(
  ({ type = 'button', className = 'dbuitkThemedButton' }) => ({
    type,
    className,
  }),
)`
  ${ButtonVariantCSS}
`

export default ThemedButton
