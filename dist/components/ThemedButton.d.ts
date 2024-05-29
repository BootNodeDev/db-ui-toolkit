/// <reference types="react" />
interface Props {
    $cssVarRoot?: string;
}
/**
 * Themed button CSS generator
 *
 * @param {string} cssVarRoot - CSS variable root for the themed button
 * i.e.: --button-primary. The root is used to generate several CSS variables.
 *
 * You need to provide the following variables in your CSS (examples based on
 * the '--button-primary' root above). Some default values are provided in case
 * you don't provide them in your CSS:
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
 */
export declare const ButtonVariantCSS: import("styled-components").RuleSet<Props>;
/**
 * Base themed button component
 */
declare const ThemedButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Props>> & string;
export default ThemedButton;
