import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

/**
 * @name Text
 *
 * @description Text component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-text`
 *
 * **Base CSS variables:**
 *
 * - `--base-text-font-size`
 */
const Text = styled.p<{ $variant?: string }>`
  ${({ $variant }) => css`
    color: var(
      ${cssCustomPropertyName({
        componentName: 'text',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #4b4d60
    );
    font-size: var(
      ${cssCustomPropertyName({
        componentName: 'text',
        componentVariant: $variant,
        customPropertyName: 'font-size',
        customPropertyPrefix: 'base',
      })},
      1.6rem
    );
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 var(--base-gap-xl, 16px);
    max-width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export default Text
