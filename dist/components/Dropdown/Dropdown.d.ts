import { HTMLAttributes, ReactElement, FC } from 'react';
import { Direction, Position } from './index';
type HighlightItem = number | true | undefined;
interface Props extends HTMLAttributes<HTMLDivElement> {
    button: ReactElement<HTMLButtonElement>;
    clearDropdownStyle?: boolean;
    direction?: Direction;
    disabled?: boolean;
    highlightItem?: HighlightItem;
    items: Array<ReactElement> | ReactElement;
    position?: Position;
}
/**
 * Dropdown component
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {HighlightItem} [highlightItem=undefined] - Adds a `dropdownItemActive` class to the selected item.
 * `true` if you want items to be highlighted when clicked, but don't want a highlighted item by default.
 * A number from `0` to `items.length` if you want a single item highlighted by default.
 * `undefined` disables the functionality, no item is highlighted when clicked.
 * Default is undefined.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 */
declare const Dropdown: FC<Props>;
export default Dropdown;
