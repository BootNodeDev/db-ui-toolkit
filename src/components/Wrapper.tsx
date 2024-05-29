import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

/**
 * Main wrapper component
 */
const Wrapper: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <ComponentWrapper
      style={style}
      className={`dbuitkWrapper ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </ComponentWrapper>
  )
}

export default Wrapper
