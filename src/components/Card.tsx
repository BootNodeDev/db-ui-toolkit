import { styled } from 'styled-components'

/**
 * Card component
 *
 * Theme CSS variables:
 *
 * * --theme-card-background-color: Card background color.
 * * --theme-card-border-color: Card border color.
 * * --theme-card-box-shadow: Card box shadow.
 */
const Card = styled.div`
  background-color: var(--theme-card-background-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border: 1px solid var(--theme-card-border-color, #fff);
  box-shadow: var(--theme-card-box-shadow, 0 0 20px 0 rgb(0 0 0 / 8%));
  display: flex;
  flex-direction: column;
  padding: var(--base-common-padding-xl, 16px);
  white-space: normal;
`

export default Card
