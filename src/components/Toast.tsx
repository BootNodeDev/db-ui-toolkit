import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

/**
 * @name Toast
 *
 * @description Toast component
 *
 * **Theme CSS variables:**
 *
 * - `--theme-toast-background-color: Toast background color`
 * - `--theme-toast-color: Toast text color`
 */
const Toast = styled.div<{ $variant?: string }>`
  ${({ $variant }) => css`
    align-items: center;
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'toast',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      #2e3048
    );
    border-radius: var(
      ${cssCustomPropertyName({
        componentName: 'toast',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
      var(--base-border-radius-sm, 4px)
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'toast',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #fff
    );
    display: flex;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.3;
    max-width: 250px;
    padding: var(
      ${cssCustomPropertyName({
        componentName: 'toast',
        componentVariant: $variant,
        customPropertyName: 'padding',
      })},
      var(--base-common-padding-xl, 16px)
    );
    word-break: break-word;
  `}
`

export default Toast
