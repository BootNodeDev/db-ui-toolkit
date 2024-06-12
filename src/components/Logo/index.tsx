import React, { HTMLAttributes } from 'react'
import { styled } from 'styled-components'
import LogoDark from './assets/logo-dark.svg'
import LogoLight from './assets/logo-light.svg'

const Wrapper = styled.img`
  --base-logo: url(${LogoLight});

  [data-theme='light'] & {
    --base-logo: url(${LogoLight});
  }

  [data-theme='dark'] & {
    --base-logo: url(${LogoDark});
  }

  display: block;
  flex-shrink: 0;
  content: var(--base-logo);
`

Wrapper.defaultProps = {
  alt: 'Logo',
}

/**
 * Default Logo component
 */
const Logo: React.FC<HTMLAttributes<HTMLElement>> = ({ style, className, ...restProps }) => (
  <Wrapper
    className={`dbuitkLogo ${className ? className : ''}`.trim()}
    style={style}
    {...restProps}
  />
)

export default Logo
