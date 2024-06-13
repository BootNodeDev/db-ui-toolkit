import React, { PropsWithChildren, MouseEventHandler } from 'react';
interface Props extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>;
}
/**
 * SwitchThemeButton component - A button that switches between light and dark themes.
 *
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - Function that switches the theme.
 */
declare const SwitchThemeButton: React.FC<Props>;
export default SwitchThemeButton;
