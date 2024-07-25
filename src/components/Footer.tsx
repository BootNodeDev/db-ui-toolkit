import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

/**
 * @name Footer
 *
 * @description Barebones footer component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-footer-background-color: Footer background color`
 * - `--theme-footer-text-color: Footer text color`
 */
const Footer = styled.footer<{ $variant?: string }>`
  ${({ $variant }) => css`
    align-items: center;
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'footer',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      transparent
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'footer',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #000
    );
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
  `}
`

export default Footer
