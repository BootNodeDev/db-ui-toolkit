import { InputHTMLAttributes } from 'react';
export type TextfieldStatus = 'error' | 'ok' | undefined;
interface TextfieldCSSProps {
    $status?: TextfieldStatus | undefined;
}
interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement>, TextfieldCSSProps {
}
/**
 * Textfield component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 *
 * Theme CSS vars:
 *
 * * --theme-textfield-default-background-color
 * * --theme-textfield-default-background-color-active
 * * --theme-textfield-default-border-color
 * * --theme-textfield-default-color
 * * --theme-textfield-default-error-color
 * * --theme-textfield-default-ok-color
 * * --theme-textfield-default-placeholder-color
 * * --theme-textfield-default-border-error-color
 * * --theme-textfield-default-border-ok-color
 * * --theme-textfield-active-boxshadow
 *
 * Base CSS vars:
 *
 * * --base-textfield-height
 * * --base-textfield-border-radius
 * * --base-textfield-font-size
 * * --base-textfield-default-vertical-padding
 * * --base-textfield-default-horizontal-padding
 * * --base-textfield-transition-time
 */
export declare const TextfieldCSS: import("styled-components").RuleSet<TextfieldCSSProps>;
declare const Textfield: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TextfieldProps>> & string;
export default Textfield;
