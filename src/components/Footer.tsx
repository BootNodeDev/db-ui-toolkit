import { styled } from 'styled-components'

/**
 * Barebones footer component
 *
 * Theme CSS variables:
 *
 * * --theme-footer-background-color: Footer background color.
 * * --theme-footer-text-color: Footer text color.
 */
const Footer = styled.footer`
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`

export default Footer
