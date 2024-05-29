import { RuleSet } from 'styled-components';
/**
 * CSS media queries can't get their values from CSS variables, so we need to
 * define them here as JS constants.
 */
export declare const breakpoints: {
    readonly desktopStart: "1025px";
    readonly desktopWideStart: "1281px";
    readonly tabletLandscapeStart: "769px";
    readonly tabletPortraitStart: "481px";
};
export type Breakpoint = keyof typeof breakpoints;
/**
 *
 * @param breakpoint - a breakpoint value, e.g. 'desktopStart'
 * @param css - a CSS rule set
 * @returns string - a media query string
 */
export declare const breakpointMediaQuery: (breakpoint: Breakpoint, css: RuleSet<object>) => string;
