/// <reference types="react" />
interface Props {
    $cssVarRoot?: string;
}
/**
 * Themed button CSS generator
 */
export declare const ButtonVariantCSS: import("styled-components").RuleSet<Props>;
/**
 * Base themed button component
 *
 * @param {string} $cssVarRoot - CSS variable root for the themed button
 * i.e.: --button-primary. The root is used to dinamically generate several
 * CSS variables. For example: [$cssVarRoot]-background-color,
 * [$cssVarRoot]-border-color, etc.
 *
 * Based on the $cssVarRoot == '--button-primary' example above, you'd need to
 * create the following variables in your CSS:
 *
 * --button-primary-background-color
 * --button-primary-background-color-hover
 * --button-primary-border-color
 * --button-primary-border-color-hover
 * --button-primary-color
 * --button-primary-color-hover
 * --button-primary-background-color-disabled
 * --button-primary-border-color-disabled
 * --button-primary-color-disabled
 *
 * See the examples in the demo page or in dAppBooster for further clarification.
 */
declare const ThemedButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}>, never>, never>, Props>> & string;
export default ThemedButton;
