/// <reference types="react" />
/**
 * Common button styles. You can use a combination of these to make any
 * component look like a button (i.e. anchors)
 */
/**
 * Disabled button styles
 */
export declare const DisabledButtonCSS: import("styled-components").RuleSet<object>;
/**
 * Active button styles
 */
export declare const ActiveButtonCSS: import("styled-components").RuleSet<object>;
/**
 * Common button styles
 */
export declare const ButtonCSS: import("styled-components").RuleSet<{
    $variant?: string | undefined;
}>;
/**
 * Themed button colors
 */
export declare const ButtonVariantCSS: import("styled-components").RuleSet<{
    $variant?: string | undefined;
}>;
export interface Props {
    $variant?: string;
}
/**
 * @name Button
 *
 * @description Customizable button
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-button-background-color`
 * - `--theme-button-background-color-hover`
 * - `--theme-button-border-color`
 * - `--theme-button-border-color-hover`
 * - `--theme-button-color`
 * - `--theme-button-color-hover`
 * - `--theme-button-background-color-disabled`
 * - `--theme-button-border-color-disabled`
 * - `--theme-button-color-disabled`
 *
 * **Base CSS variables:**
 *
 * - `--base-button-border-radius`
 * - `--base-button-font-family`
 * - `--base-button-column-gap`
 * - `--base-button-padding`
 * - `--base-button-transition-duration`
 */
declare const Button: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, Props>, never>> & string;
export default Button;
