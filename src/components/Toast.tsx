import { styled } from 'styled-components'

/**
 * Toast component
 *
 * Theme CSS variables:
 *
 * --theme-toast-background-color: Toast background color.
 * --theme-toast-color: Toast text color.
 */
const Toast = styled.div`
  align-items: center;
  background-color: var(--theme-toast-background-color, #2e3048);
  border-radius: var(--base-border-radius-sm, 4px);
  color: var(--theme-toast-color, #fff);
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3;
  max-width: 250px;
  padding: calc(var(--base-common-padding, 8px) + var(--base-common-padding-sm, 4px));
  word-break: break-word;
`

export default Toast
