/// <reference types="react" />
import { Direction, Position } from './index';
interface ItemsProps {
    $direction?: Direction;
    $isOpen: boolean;
    $position?: Position;
}
/**
 * BaseItems component - A generic container for dropdown items. No theming.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 */
export declare const BaseItems: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, ItemsProps>, never>> & string;
/**
 * Items component - A container for dropdown items.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 *
 * Theme CSS Variables:
 *
 * * --theme-dropdown-background-color: Dropdown background color.
 * * --theme-dropdown-border-color: Dropdown border color.
 * * --theme-dropdown-box-shadow: Dropdown box shadow.
 */
declare const Items: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, ItemsProps>, never>, never>> & string;
export default Items;
