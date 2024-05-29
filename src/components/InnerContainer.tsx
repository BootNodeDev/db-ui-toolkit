import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 100%;
  width: var(--base-container-max-width, 1360px);
`

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

/**
 * Container for inner content
 */
const InnerContainer: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <Wrapper
      style={style}
      className={`dbuitkInnerContainer  ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </Wrapper>
  )
}

export default InnerContainer
