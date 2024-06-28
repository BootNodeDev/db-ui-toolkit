import { InputHTMLAttributes } from 'react';
export type TextfieldStatus = 'error' | 'ok' | undefined;
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    $status?: TextfieldStatus | undefined;
}
/**
 * Textfield CSS
 */
export declare const TextfieldCSS: import("styled-components").RuleSet<Props>;
/**
 * Textfield component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 *
 * Theme CSS vars:
 *
 * * --theme-textfield-background-color
 * * --theme-textfield-background-color-active
 * * --theme-textfield-border-color
 * * --theme-textfield-color
 * * --theme-textfield-error-color
 * * --theme-textfield-ok-color
 * * --theme-textfield-placeholder-color
 * * --theme-textfield-border-error-color
 * * --theme-textfield-border-ok-color
 * * --theme-textfield-active-boxshadow
 *
 * Base CSS vars:
 *
 * * --base-textfield-height
 * * --base-textfield-border-radius
 * * --base-textfield-font-size
 * * --base-textfield-vertical-padding
 * * --base-textfield-horizontal-padding
 * * --base-textfield-transition-time
 */
declare const Textfield: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Props>> & string;
export default Textfield;
