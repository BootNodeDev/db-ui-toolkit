import { styled } from 'styled-components'

/**
 * Barebones header component
 *
 * Theme CSS variables:
 *
 * --theme-header-background-color: Header background color.
 * --theme-header-text-color: Header text color.
 */
const Header = styled.header`
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`

export default Header
