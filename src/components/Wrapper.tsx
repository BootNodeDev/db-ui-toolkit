import { styled } from 'styled-components'

/**
 * Main wrapper component
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

Wrapper.defaultProps = {
  className: 'dbuitkWrapper',
}

export default Wrapper
