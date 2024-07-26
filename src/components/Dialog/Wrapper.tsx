import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../../utils'

/**
 * @name Wrapper
 *
 * @description Dialog main wrapper component
 *
 * @param {string} [$variant] - Optional component variant.
 */
const Wrapper = styled.dialog<{ $variant?: string }>`
  ${({ $variant }) => css`
    border: none;
    border-radius: var(
      ${cssCustomPropertyName({
        componentName: 'dialog',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
      var(--base-border-radius, 8px)
    );
    max-width: calc(100vw - 20px);
    padding: 0;
    transition:
      display
        var(
          ${cssCustomPropertyName({
            componentName: 'dialog',
            componentVariant: $variant,
            customPropertyName: 'animation-time',
            customPropertyPrefix: 'base',
          })},
          var(--base-animation-time-xl, 0.4s)
        )
        ease-out allow-discrete,
      opacity
        var(
          ${cssCustomPropertyName({
            componentName: 'dialog',
            componentVariant: $variant,
            customPropertyName: 'animation-time',
            customPropertyPrefix: 'base',
          })},
          var(--base-animation-time-xl, 0.4s)
        )
        ease-out,
      overlay
        var(
          ${cssCustomPropertyName({
            componentName: 'dialog',
            componentVariant: $variant,
            customPropertyName: 'animation-time',
            customPropertyPrefix: 'base',
          })},
          var(--base-animation-time-xl, 0.4s)
        )
        ease-out allow-discrete;

    &::backdrop {
      transition:
        background-color
          var(
            ${cssCustomPropertyName({
              componentName: 'dialog',
              componentVariant: $variant,
              customPropertyName: 'animation-time',
              customPropertyPrefix: 'base',
            })},
            var(--base-animation-time-sm, 0.2s)
          ),
        display
          var(
            ${cssCustomPropertyName({
              componentName: 'dialog',
              componentVariant: $variant,
              customPropertyName: 'animation-time',
              customPropertyPrefix: 'base',
            })},
            var(--base-animation-time-sm, 0.2s)
          )
          allow-discrete,
        overlay
          var(
            ${cssCustomPropertyName({
              componentName: 'dialog',
              componentVariant: $variant,
              customPropertyName: 'animation-time',
              customPropertyPrefix: 'base',
            })},
            var(--base-animation-time-sm, 0.2s)
          )
          allow-discrete;
    }

    &[open] {
      opacity: 1;

      &::backdrop {
        background-color: var(
          ${cssCustomPropertyName({
            componentName: 'dialog',
            componentVariant: $variant,
            customPropertyName: 'overlay-color',
          })},
          rgb(0 0 0 / 25%)
        );
      }
    }

    /* Transitions will start in these states */
    @starting-style {
      &[open] {
        opacity: 0;

        &::backdrop {
          background-color: rgb(0 0 0 / 0%);
        }
      }
    }
  `}
`

export default Wrapper
