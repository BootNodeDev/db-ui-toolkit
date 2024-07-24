import React, { ButtonHTMLAttributes } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}
/**
 * @name SwitchThemeButton for dAppBooster
 *
 * @description A button that switches between light and dark themes.
 *
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - Function that switches the theme.
 */
declare const SwitchThemeButton: React.FC<Props>;
export default SwitchThemeButton;
