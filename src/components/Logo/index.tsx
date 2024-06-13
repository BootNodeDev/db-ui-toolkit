import React, { ImgHTMLAttributes } from 'react'
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

  content: var(--base-logo);
  display: block;
  flex-shrink: 0;
`

Wrapper.defaultProps = {
  alt: 'Logo',
  className: 'dbuitkLogo',
}

/**
 * Default Logo component
 */
const Logo: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ ...restProps }) => (
  <Wrapper {...restProps} />
)

export default Logo
