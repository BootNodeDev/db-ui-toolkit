import { styled, css } from 'styled-components'

export const DisabledButtonCSS = css`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const ActiveButtonCSS = css`
  &:active {
    opacity: 0.8;
  }
`

export const ButtonCSS = css`
  align-items: center;
  border-radius: var(--base-border-radius-sm, 4px);
  border-style: solid;
  border-width: 1px;
  column-gap: var(--base-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-size, 15px);
  font-weight: 400;
  height: var(--base-button-height, 38px);
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0 calc(var(--base-gap, 8px) * 2);
  text-decoration: none;
  transition: all 0.15s ease-out;
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
