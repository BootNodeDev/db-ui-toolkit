import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

/**
 * @name Title
 *
 * @description Title component
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-title`
 *
 * **Base CSS variables:**
 *
 * - `--base-title-font-size`
 */
const Title = styled.h1<{ $variant?: string }>`
  ${({ $variant }) => css`
    color: var(
      ${cssCustomPropertyName({
        componentName: 'title',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #000
    );
    font-size: var(
      ${cssCustomPropertyName({
        componentName: 'title',
        componentVariant: $variant,
        customPropertyName: 'font-size',
        customPropertyPrefix: 'base',
      })},
      2.4rem
    );
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 calc(var(--base-gap, 8px) * 3);
  `}
`

export default Title
