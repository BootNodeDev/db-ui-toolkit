import { styled } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

/**
 * Card component
 *
 * Theme CSS variables:
 *
 * * --theme-card-background-color: Card background color.
 * * --theme-card-border-color: Card border color.
 * * --theme-card-box-shadow: Card box shadow.
 *
 * Base CSS variables:
 *
 * * --base-card-border-radius: Card border radius.
 * * --base-card-padding: Card padding.
 */
const Card = styled.div<{ variant?: string }>`
  background-color: var(
    ${({ variant }) =>
      cssCustomPropertyName({ name: 'card', variant: variant, cssProperty: 'background-color' })},
    #fff
  );
  border-radius: var(
    ${({ variant }) =>
      cssCustomPropertyName({
        cssProperty: 'border-radius',
        name: 'card',
        prefix: 'base',
        variant: variant,
      })},
    var(--base-border-radius, 8px)
  );
  border: 1px solid
    var(
      ${({ variant }) =>
        cssCustomPropertyName({ name: 'card', variant: variant, cssProperty: 'border-color' })},
      #fff
    );
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 8%);
  display: flex;
  flex-direction: column;
  padding: var(
    ${({ variant }) =>
      cssCustomPropertyName({
        cssProperty: 'padding',
        name: 'card',
        prefix: 'base',
        variant: variant,
      })},
    var(--base-common-padding-xl, 16px)
  );
  white-space: normal;
`

export default Card
