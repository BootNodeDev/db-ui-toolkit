import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
/**
 * CopyButton component, a button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 *
 * Theme CSS variables:
 *
 * --theme-copy-button-color: Button color.
 * --theme-copy-button-color-hover: Button color on hover.
 */
declare const CopyButton: React.FC<Props>;
export default CopyButton;
