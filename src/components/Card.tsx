import { styled } from 'styled-components'

/**
 * Card component
 */
const Card = styled.div`
  background-color: var(--theme-card-background-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border: 1px solid var(--theme-card-border-color, #fff);
  box-shadow: var(--theme-card-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
  display: flex;
  flex-direction: column;
  padding: var(--base-common-padding, 8px);
  white-space: normal;
`

Card.defaultProps = {
  className: 'dbuitkCard',
}

export default Card
