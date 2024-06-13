/// <reference types="react" />
import { Direction, Position } from './index';
interface ItemsProps {
    $direction?: Direction;
    $position?: Position;
    $isOpen: boolean;
}
/**
 * BaseItems component - A container for dropdown items.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 */
export declare const BaseItems: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ItemsProps>> & string;
declare const Items: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ItemsProps> & ItemsProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, never>> & string;
export default Items;
