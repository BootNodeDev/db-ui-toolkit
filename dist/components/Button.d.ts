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
export declare const ButtonCSS: import("styled-components").RuleSet<object>;
/**
 * Common button
 *
 * Base CSS variables:
 *
 * --base-button-border-radius: Button border radius.
 * --base-button-font-size: Button font size.
 * --base-button-gap: Button column gap.
 * --base-button-height: Button height.
 * --base-button-padding: Button padding.
 */
declare const Button: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, never>, never>> & string;
export default Button;
