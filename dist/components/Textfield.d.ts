import { InputHTMLAttributes } from 'react';
export type TextfieldStatus = 'error' | 'ok' | undefined;
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    $status?: TextfieldStatus | undefined;
    $variant?: string;
}
/**
 * Textfield CSS
 */
export declare const TextfieldCSS: import("styled-components").RuleSet<Props>;
/**
 * @name Textfield
 *
 * @description Input component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-textfield-color`
 * - `--theme-textfield-color-active`
 * - `--theme-textfield-color-error`
 * - `--theme-textfield-color-ok`
 * - `--theme-textfield-background-color`
 * - `--theme-textfield-background-color-active`
 * - `--theme-textfield-border-color`
 * - `--theme-textfield-border-color-active`
 * - `--theme-textfield-border-color-error`
 * - `--theme-textfield-border-color-ok`
 * - `--theme-textfield-placeholder-color`
 * - `--theme-textfield-box-shadow`
 * - `--theme-textfield-box-shadow-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-textfield-height`
 * - `--base-textfield-border-radius`
 * - `--base-textfield-font-size`
 * - `--base-textfield-vertical-padding`
 * - `--base-textfield-horizontal-padding`
 * - `--base-textfield-transition-duration`
 */
declare const Textfield: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, Props>> & string;
export default Textfield;
