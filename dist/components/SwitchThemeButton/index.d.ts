import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}
/**
 * SwitchThemeButton component - A button that switches between light and dark themes.
 *
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - Function that switches the theme.
 */
declare const SwitchThemeButton: React.FC<Props>;
export default SwitchThemeButton;
