/// <reference types="react" />
/**
 * @name Header
 *
 * @description Barebones header component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-header-background-color: Header background color`
 * - `--theme-header-text-color: Header text color`
 */
declare const Header: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $variant?: string | undefined;
}>> & string;
export default Header;
