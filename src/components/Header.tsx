import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.header`
  background-color: var(--theme-header-background-color, transparent);
  color: var(--theme-header-text-color, #000);
  flex-grow: 0;
  flex-shrink: 0;
`

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

/**
 * Barebones header component
 */
const Header: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <Wrapper
      style={style}
      className={`dbuitkHeader ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </Wrapper>
  )
}

export default Header
