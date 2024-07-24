import { type FC, type HTMLAttributes, type ReactElement, type RefAttributes } from 'react';
import { Direction, Position } from './index';
export interface DropdownExposedProps {
    close: () => void;
}
export interface Options extends HTMLAttributes<HTMLDivElement>, RefAttributes<DropdownExposedProps> {
    $variant?: string;
    button: ReactElement<HTMLButtonElement>;
    closeOnClick?: boolean;
    defaultActiveItem?: number;
    direction?: Direction;
    disabled?: boolean;
    highlightActiveItem?: boolean;
    items: Array<ReactElement> | ReactElement;
    onItemSelect?: (index: number) => void;
    position?: Position;
}
/**
 * @name Dropdown
 *
 * @description A Dropdown component.
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightActiveItem=true] - Optionally highlight the selected item. Default is true.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 * @param {number} [defaultActiveItem=-1] - The index of the item that is active by default. Default is -1.
 * @param {Function} [onItemSelect] - A function that is called when an item is selected.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-background-color`
 * - `--theme-dropdown-border-color`
 * - `--theme-dropdown-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-border-radius`
 * - `--base-dropdown-transition-duration`
 */
declare const Dropdown: FC<Options>;
export default Dropdown;
