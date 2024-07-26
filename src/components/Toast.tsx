import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

/**
 * @name Toast
 *
 * @description Toast component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-toast-background-color`
 * - `--theme-toast-color`
 *
 * **Base CSS variables:**
 *
 * - `--base-toast-border-radius`
 * - `--base-toast-padding`
 * - `--base-toast-transition-duration`
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
    transition:
      display
        var(
          ${cssCustomPropertyName({
            componentName: 'toast',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
          var(--base-transition-duration-sm, 0.2s)
        )
        ease-out allow-discrete,
      opacity
        var(
          ${cssCustomPropertyName({
            componentName: 'toast',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
          var(--base-transition-duration-sm, 0.2s)
        )
        ease-out;
    word-break: break-word;

    /* Transitions will start in these states */
    @starting-style {
      opacity: 0;
    }
  `}
`

export default Toast
