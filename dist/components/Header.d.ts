/// <reference types="react" />
/**
 * Barebones header component
 *
 * Theme CSS variables:
 *
 * --theme-header-background-color: Header background color.
 * --theme-header-text-color: Header text color.
 */
declare const Header: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void) | import("react").RefObject<HTMLElement> | null | undefined;
}>, never>, never>> & string;
export default Header;
