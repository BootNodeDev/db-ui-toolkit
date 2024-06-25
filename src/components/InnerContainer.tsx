import { styled } from 'styled-components'

/**
 * Container for inner content
 */
const InnerContainer = styled.div.attrs(({ className = 'dbuitkInnerContainer' }) => ({
  className,
}))`
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 100%;
  width: var(--base-container-max-width, 1360px);
`

export default InnerContainer
