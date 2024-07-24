/// <reference types="react" />
/**
 * @name Footer
 *
 * @description Barebones footer component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-footer-background-color: Footer background color`
 * - `--theme-footer-text-color: Footer text color`
 */
declare const Footer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $variant?: string | undefined;
}>> & string;
export default Footer;
