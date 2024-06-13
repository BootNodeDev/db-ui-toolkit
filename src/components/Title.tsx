import { styled } from 'styled-components'

const Title = styled.h1`
  color: var(--theme-color-text, #000);
  font-size: var(--base-title-font-size, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 calc(var(--base-gap, 8px) * 3);
`

Title.defaultProps = {
  className: 'dbuitkTitle',
}

export default Title
