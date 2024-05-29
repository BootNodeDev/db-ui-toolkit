/**
 * CSS media queries can't get their values from CSS variables, so we need to
 * define them here as JS constants.
 */
export const breakpoints = {
    desktopStart: '1025px',
    desktopWideStart: '1281px',
    tabletLandscapeStart: '769px',
    tabletPortraitStart: '481px',
};
/**
 * @param breakpoint - a breakpoint value, e.g. 'desktopStart'
 * @param css - a CSS rule set
 * @returns string - a media query string
 */
export const breakpointMediaQuery = (breakpoint, css) => {
    return `@media (min-width: ${breakpoints[breakpoint]}) {
    ${css}
  }`;
};