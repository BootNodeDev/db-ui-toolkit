import { type FC, type ComponentPropsWithoutRef } from 'react'
import { styled } from 'styled-components'

import LogoDark from '@/src/components/Logo/assets/logo-dark.svg'
import LogoLight from '@/src/components/Logo/assets/logo-light.svg'

const Wrapper = styled.img.attrs(({ alt = 'Logo' }) => ({
  alt,
}))`
  /**
   * Encoded for easier exporting
   */
  --base-logo: url('data:image/svg+xml;base64,${LogoLight}');

  [data-theme='dark'] & {
    --base-logo: url('data:image/svg+xml;base64,${LogoDark}');
  }

  content: var(--base-logo);
  display: block;
  flex-shrink: 0;
`

/**
 * @name Logo
 *
 * @description Default dAppBooster logo
 */
const Logo: FC<ComponentPropsWithoutRef<'img'>> = ({ ...restProps }) => <Wrapper {...restProps} />

export default Logo
