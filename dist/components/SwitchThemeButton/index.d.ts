import React, { PropsWithChildren, MouseEventHandler } from 'react';
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
interface Props extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>;
}
/**
 * SwitchThemeButton component
 *
 * @param theme: string | undefined
 */
declare const SwitchThemeButton: React.FC<Props>;
export default SwitchThemeButton;
