import { styled, css } from 'styled-components'

/**
 * Common button styles. You can use a combination of these to make any
 * component look like a button (i.e. anchors)
 */

/**
 * Disabled button styles
 */
export const DisabledButtonCSS = css`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

/**
 * Active button styles
 */
export const ActiveButtonCSS = css`
  &:active {
    opacity: 0.8;
  }
`

/**
 * Common button styles
 */
export const ButtonCSS = css`
  align-items: center;
  border-radius: var(--base-button-border-radius, 4px);
  border-style: solid;
  border-width: 1px;
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 1.5rem);
  font-weight: 400;
  height: var(--base-button-height, 38px);
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0 var(--base-button-padding, 16px);
  text-decoration: none;
  transition:
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  user-select: none;
  white-space: nowrap;
`

/**
 * Common button
 *
 * Base CSS variables:
 *
 * --base-button-border-radius: Button border radius.
 * --base-button-font-size: Button font size.
 * --base-button-gap: Button column gap.
 * --base-button-height: Button height.
 * --base-button-padding: Button padding.
 */
const Button = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  ${ButtonCSS}
  ${ActiveButtonCSS}
  ${DisabledButtonCSS}
`

export default Button
