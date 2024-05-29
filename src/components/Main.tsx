import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  flex-grow: 1;
`

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

/**
 * Main content container component
 */
const Main: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <Wrapper
      style={style}
      className={`dbuitkMain ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </Wrapper>
  )
}

export default Main
