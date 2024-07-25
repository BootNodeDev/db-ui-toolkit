/// <reference types="react" />
/**
 * @name Toast
 *
 * @description Toast component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-toast-background-color`
 * - `--theme-toast-color`
 *
 * **Base CSS variables:**
 *
 * - `--base-toast-border-radius`
 * - `--base-toast-padding`
 * - `--base-toast-transition-duration`
 */
declare const Toast: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string | undefined;
}>> & string;
export default Toast;
