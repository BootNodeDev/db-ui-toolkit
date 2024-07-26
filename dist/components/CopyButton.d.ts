import { type FC, type ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    $variant?: string;
}
/**
 * @name CopyButton
 *
 * @description A button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-copy-button-color`
 * - `--theme-copy-button-color-hover`
 *
 * **Base CSS variables:**
 *
 * - `--base-copy-button-column-gap`
 * - `--base-copy-button-font-family`
 * - `--base-copy-button-transition-duration`
 */
declare const CopyButton: FC<Props>;
export default CopyButton;
