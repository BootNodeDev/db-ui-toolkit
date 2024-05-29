import React, { PropsWithChildren } from 'react';
export declare const Wrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
interface Props extends PropsWithChildren {
    onClick: () => void;
    theme: string | undefined;
}
/**
 * SwitchThemeButton component
 *
 * @param theme: string | undefined
 * @param onClick: () => void
 */
declare const SwitchThemeButton: React.FC<Props>;
export default SwitchThemeButton;
