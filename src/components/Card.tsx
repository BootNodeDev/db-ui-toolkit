import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

/**
 * @name Card
 *
 * @description Customizable card
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-card-background-color`
 * - `--theme-card-border-color`
 * - `--theme-card-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-card-border-radius`
 * - `--base-card-padding`
 * - `--base-card-box-shadow`
 */
const Card = styled.div<{ $variant?: string }>`
  ${({ $variant }) => css`
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'card',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      #fff
    );
    border-radius: var(
      ${cssCustomPropertyName({
        componentName: 'card',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
      var(--base-border-radius, 8px)
    );
    border: 1px solid
      var(
        ${cssCustomPropertyName({
          componentName: 'card',
          componentVariant: $variant,
          customPropertyName: 'border-color',
        })},
        #fff
      );
    box-shadow: var(
      ${cssCustomPropertyName({
        componentName: 'card',
        componentVariant: $variant,
        customPropertyName: 'box-shadow',
      })},
      0 0 20px 0 rgb(0 0 0 / 8%)
    );
    display: flex;
    flex-direction: column;
    padding: var(
      ${cssCustomPropertyName({
        componentName: 'card',
        componentVariant: $variant,
        customPropertyName: 'padding',
        customPropertyPrefix: 'base',
      })},
      var(--base-common-padding-xl, 16px)
    );
    white-space: normal;
  `}
`

export default Card
