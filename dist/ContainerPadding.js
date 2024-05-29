import { css } from 'styled-components';
import { breakpointMediaQuery } from './breakpoints';
export const ContainerPadding = css `
  padding-left: var(--base-padding-sm, 4px);
  padding-right: var(--base-padding-sm, 4px);

  ${breakpointMediaQuery('tabletPortraitStart', css `
      padding-left: var(--base-padding, 8px);
      padding-right: var(--base-padding, 8px);
    `)}

  ${breakpointMediaQuery('tabletLandscapeStart', css `
      padding-left: var(--base-padding, 8px);
      padding-right: var(--base-padding, 8px);
    `)}

${breakpointMediaQuery('desktopStart', css `
      padding-left: var(--base-padding-xl, 16px);
      padding-right: var(--base-padding-xl, 16px);
    `)}

${breakpointMediaQuery('desktopWideStart', css `
      padding-left: var(--base-padding-xl);
      padding-right: var(--base-padding-xl);
    `)}
`;
