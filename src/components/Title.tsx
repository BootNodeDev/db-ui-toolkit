import { styled } from 'styled-components'

/**
 * Title component
 *
 * Theme CSS variables:
 *
 * --theme-color-title: Title text color.
 *
 * Base CSS variables:
 *
 * --base-title-font-size: Title font size.
 */
const Title = styled.h1`
  color: var(--theme-color-title, --theme-color-text-primary, #000);
  font-size: var(--base-title-font-size, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 calc(var(--base-gap, 8px) * 3);
`

export default Title
