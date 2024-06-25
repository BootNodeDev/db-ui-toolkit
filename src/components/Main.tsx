import { styled } from 'styled-components'

/**
 * Main content container component
 */
const Main = styled.main.attrs(({ className = 'dbuitkMain' }) => ({ className }))`
  display: flex;
  flex-grow: 1;
`

export default Main
