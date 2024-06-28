import React, { ReactElement, HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    actionButton?: ReactElement<HTMLButtonElement>;
    icon?: ReactElement;
    message?: string | ReactElement;
    title?: string;
}
/**
 * General error component.
 *
 * @param {ReactElement<HTMLButtonElement>} [actionButton] - Optional action button. Can be used to reload the page, redirect the user somewhere, etc.
 * @param {Array<ReactElement> | ReactElement} [icon] - Optional icon to display. Default is an alert icon.
 * @param {string | ReactElement} [message] - Optional message to display. Default is 'Something went wrong.'
 * @param {string} [title] - Optional title to display. Default is 'Error'.
 *
 * Theme CSS variables:
 *
 * * --theme-generic-error-background-color: Background color of the container.
 * * --theme-generic-error-border-color: Border color of the container.
 * * --theme-generic-error-box-shadow: Box shadow of the container.
 * * --theme-generic-error-color-icon: Color of the icon (only works for fill="currentColor").
 * * --theme-generic-error-color-title: Color of the title.
 * * --theme-generic-error-color-text: Color of the text message.
 * * --theme-generic-error-color-message-background: Background color of the text message.
 */
declare const GeneralError: React.FC<Props>;
export default GeneralError;
