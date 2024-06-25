import { styled } from 'styled-components'

/**
 * Main wrapper component
 */
const Wrapper = styled.div.attrs(({ className = 'dbuitkWrapper' }) => ({ className }))`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export default Wrapper
