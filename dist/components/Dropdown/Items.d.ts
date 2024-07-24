/// <reference types="react" />
import { Direction, Position } from './index';
interface ItemsProps {
    $direction?: Direction;
    $isOpen: boolean;
    $position?: Position;
    $variant?: string;
}
/**
 * @name BaseItems
 *
 * @description A generic "abstract" container for dropdown items.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 * @param {string} [$variant] - Optional component variant.
 */
export declare const BaseItems: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, ItemsProps>, never>> & string;
/**
 * @name Items
 *
 * @description Items component - Default container for dropdown items.
 */
declare const Items: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string | undefined;
}>> & string;
export default Items;
