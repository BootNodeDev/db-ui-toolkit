import { styled } from 'styled-components'

/**
 * Text component
 *
 * Theme CSS variables:
 *
 * * --theme-color-text: Text color.
 *
 * Base CSS variables:
 *
 * * --base-text-font-size: Text font size.
 */
const Text = styled.p`
  color: var(--theme-color-text, #000);
  font-size: var(--base-text-font-size, 16px);
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 calc(var(--base-gap, 8px) * 2);
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`

export default Text
