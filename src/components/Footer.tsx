import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.footer`
  align-items: center;
  background-color: var(--theme-footer-background-color, transparent);
  color: var(--theme-footer-text-color, #000);
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
`

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

/**
 * Barebones footer component
 */
const Footer: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <Wrapper
      style={style}
      className={`dbuitkFooter ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </Wrapper>
  )
}

export default Footer
