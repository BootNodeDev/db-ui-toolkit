import React, { ReactElement, HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    $variant?: string;
    actionButton?: ReactElement<HTMLButtonElement>;
    icon?: ReactElement;
    message?: string | ReactElement;
    title?: string;
}
/**
 * @name GeneralError
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
 * - `--theme-general-error-background-color`
 * - `--theme-general-error-border-color`
 * - `--theme-general-error-box-shadow`
 * - `--theme-general-error-color-icon`
 * - `--theme-general-error-color-title`
 * - `--theme-general-error-color-text`
 * - `--theme-general-error-color-message-background`
 *
 * **Base CSS variables:**
 *
 * - `--base-general-error-border-radius`
 * - `--base-general-error-padding`
 * - `--base-general-error-row-gap`
 * - `--base-general-error-message-border-radius`
 * - `--base-general-error-message-padding`
 * - `--base-general-error-message-row-gap`
 * - `--base-general-error-box-shadow`
 */
declare const GeneralError: React.FC<Props>;
export default GeneralError;
