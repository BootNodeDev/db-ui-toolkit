/// <reference types="react" />
export interface Props {
    $closeOnClick?: boolean;
    disabled?: boolean;
}
/**
 * Dropdown item component
 *
 * @param {boolean} [$closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {boolean} [disabled=false] - Disable the dropdown item. Default is false.
 */
declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props>> & string;
export default Item;
