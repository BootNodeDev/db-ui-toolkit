import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

/**
 * @name Header
 *
 * @description Barebones header component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-header-background-color: Header background color`
 * - `--theme-header-text-color: Header text color`
 */
const Header = styled.header<{ $variant?: string }>`
  ${({ $variant }) => css`
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'header',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      transparent
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'header',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #000
    );
    flex-grow: 0;
    flex-shrink: 0;
  `}
`

export default Header
