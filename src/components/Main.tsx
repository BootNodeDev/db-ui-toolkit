import { styled } from 'styled-components'

/**
 * Main content container component
 */
const Main = styled.main`
  display: flex;
  flex-grow: 1;
`

Main.defaultProps = {
  className: 'dbuitkMain',
}

export default Main
