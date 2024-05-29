import { styled, css } from 'styled-components'

export const DisabledButtonCSS = css`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const ActiveButtonCSS = css`
  &:active {
    opacity: 0.8;
  }
`

export const ButtonCSS = css`
  align-items: center;
  border-radius: var(--base-button-border-radius, 4px);
  border-style: solid;
  border-width: 1px;
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 15px);
  font-weight: 400;
  height: var(--base-button-height, 38px);
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0 var(--base-button-padding, 16px);
  text-decoration: none;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  user-select: none;
  white-space: nowrap;

  ${ActiveButtonCSS}
  ${DisabledButtonCSS}
`

const Button = styled.button`
  ${ButtonCSS}
`

Button.defaultProps = {
  type: 'button',
}

export default Button
