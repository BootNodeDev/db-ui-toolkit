import React, { type ReactElement, type HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    $variant?: string;
    actionButton?: ReactElement<HTMLButtonElement>;
    icon?: ReactElement;
    message?: string | ReactElement;
    title?: string;
}
/**
 * @name GeneralMessage
 *
 * @description General error component.
 *
 * @param {ReactElement<HTMLButtonElement>} [actionButton] - Optional action button. Can be used to reload the page, redirect the user somewhere, etc.
 * @param {Array<ReactElement> | ReactElement} [icon] - Optional icon to display. Default is an alert icon.
 * @param {string | ReactElement} [message] - Optional message to display. Default is 'Something went wrong.'
 * @param {string} [title] - Optional title to display. Default is 'Error'.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-general-message-background-color`
 * - `--theme-general-message-border-color`
 * - `--theme-general-message-box-shadow`
 * - `--theme-general-message-color-icon`
 * - `--theme-general-message-color-title`
 * - `--theme-general-message-color-text`
 * - `--theme-general-message-color-message-background`
 *
 * **Base CSS variables:**
 *
 * - `--base-general-message-border-radius`
 * - `--base-general-message-padding`
 * - `--base-general-message-row-gap`
 * - `--base-general-message-message-border-radius`
 * - `--base-general-message-message-padding`
 * - `--base-general-message-message-row-gap`
 * - `--base-general-message-box-shadow`
 */
declare const GeneralMessage: React.FC<Props>;
export default GeneralMessage;
