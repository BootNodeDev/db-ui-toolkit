import { css } from 'styled-components'

import { breakpointMediaQuery } from './breakpoints'

/**
 * Responsive container padding for all breakpoints
 */
const ContainerPadding = css`
  padding-left: var(--base-padding-mobile, 4px);
  padding-right: var(--base-padding-mobile, 4px);

  ${breakpointMediaQuery(
    'tabletPortraitStart',
    css`
      padding-left: var(--base-padding-tablet-portrait, 8px);
      padding-right: var(--base-padding-tablet-portrait, 8px);
    `,
  )}

  ${breakpointMediaQuery(
    'tabletLandscapeStart',
    css`
      padding-left: var(--base-padding-tablet-landscape, 8px);
      padding-right: var(--base-padding-tablet-landscape, 8px);
    `,
  )}

  ${breakpointMediaQuery(
    'desktopStart',
    css`
      padding-left: var(--base-padding-desktop, 16px);
      padding-right: var(--base-padding-desktop, 16px);
    `,
  )}

  ${breakpointMediaQuery(
    'desktopWideStart',
    css`
      padding-left: var(--base-padding-desktop-xl, 16px);
      padding-right: var(--base-padding-desktop-xl, 16px);
    `,
  )}
`

export default ContainerPadding
