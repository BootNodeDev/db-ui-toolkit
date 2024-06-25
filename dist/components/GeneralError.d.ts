import React, { ReactElement } from 'react';
interface Props {
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
 * --theme-generic-error-color-title: Color of the title.
 * --theme-generic-error-color-text: Color of the text.
 * --theme-generic-error-color-icon: Color of the icon.
 * --theme-generic-error-color-message-background: Background color of the message.
 */
declare const GeneralError: React.FC<Props>;
export default GeneralError;
