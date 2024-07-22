import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

/**
 * Common button styles. You can use a combination of these to make any
 * component look like a button (i.e. anchors)
 */

/**
 * Disabled button styles
 */
export const DisabledButtonCSS = css`
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

/**
 * Active button styles
 */
export const ActiveButtonCSS = css`
  &:active {
    opacity: 0.8;
  }
`

/**
 * Common button styles
 */
export const ButtonCSS = css<{ $variant?: string }>`
  align-items: center;
  border-radius: var(
    ${({ $variant }) =>
      cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
    var(--base-border-radius-sm, 4px)
  );
  border-style: solid;
  border-width: 1px;
  column-gap: var(
    ${({ $variant }) =>
      cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'column-gap',
        customPropertyPrefix: 'base',
      })},
    var(--base-gap, 8px)
  );
  cursor: pointer;
  display: flex;
  font-family: var(
    ${({ $variant }) =>
      cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'font-family',
        customPropertyPrefix: 'base',
      })},
    var(--base-font-family, sans-serif)
  );
  font-size: 1.5rem;
  font-weight: 400;
  height: 38px;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: var(
    ${({ $variant }) =>
      cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'padding',
        customPropertyPrefix: 'base',
      })},
    0 var(--base-common-padding-xl, 16px)
  );
  text-decoration: none;
  transition:
    background-color
      var(
        ${({ $variant }) =>
          cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
        var(--base-transition-duration-sm, 0.2s)
      ),
    border-color
      var(
        ${({ $variant }) =>
          cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
        var(--base-transition-duration-sm, 0.2s)
      ),
    color
      var(
        ${({ $variant }) =>
          cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
        var(--base-transition-duration-sm, 0.2s)
      );
  user-select: none;
  white-space: nowrap;
`

/**
 * Themed button colors
 */
export const ButtonVariantCSS = css<{ $variant?: string }>`
  ${({ $variant }) => css`
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      #f0f0f0
    );
    border-color: var(
      ${cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'border-color',
      })},
      #f0f0f0
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'button',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #000
    );

    &:hover {
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'background-color-hover',
        })},
        #ddd
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'border-color-hover',
        })},
        #ddd
      );
      color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'color-hover',
        })},
        #000
      );
    }

    &[disabled],
    &[disabled]:hover {
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'background-color-disabled',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'background-color',
          })},
          #f0f0f0
        )
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'border-color-disabled',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'border-color',
          })},
          #f0f0f0
        )
      );
      color: var(
        ${cssCustomPropertyName({
          componentName: 'button',
          componentVariant: $variant,
          customPropertyName: 'color-disabled',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'button',
            componentVariant: $variant,
            customPropertyName: 'color',
          })},
          #000
        )
      );
    }
  `}
`

/**
 * @name Button
 *
 * @description Customizable button
 *
 * @param {string} [$variant] - The variant of the button
 *
 * Theme CSS variables:
 *
 * * --theme-button-background-color
 * * --theme-button-background-color-hover
 * * --theme-button-border-color
 * * --theme-button-border-color-hover
 * * --theme-button-color
 * * --theme-button-color-hover
 * * --theme-button-background-color-disabled
 * * --theme-button-border-color-disabled
 * * --theme-button-color-disabled
 *
 * Base CSS variables:
 *
 * * --base-button-border-radius
 * * --base-button-font-family
 * * --base-button-column-gap
 * * --base-button-padding
 * * --base-button-transition-duration
 */
const Button = styled.button.attrs<{ $variant?: string }>(({ type = 'button' }) => ({
  type,
}))`
  ${ButtonCSS}
  ${ActiveButtonCSS}
  ${DisabledButtonCSS}
  ${ButtonVariantCSS}
`

export default Button
