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
 *
 * Theme CSS variables:
 *
 * --theme-dropdown-item-background-color: Dropdown item background color.
 * --theme-dropdown-item-border-color: Dropdown item border color.
 * --theme-dropdown-item-color: Dropdown item text color.
 * --theme-dropdown-item-background-color-hover: Dropdown item background color on hover.
 * --theme-dropdown-item-border-color-hover: Dropdown item border color on hover.
 * --theme-dropdown-item-color-hover: Dropdown item text color on hover.
 * --theme-dropdown-item-background-color-active: Dropdown item background color when active.
 * --theme-dropdown-item-border-color-active: Dropdown item border color when active.
 * --theme-dropdown-item-color-active: Dropdown item text color when active.
 */
declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, Props>, never>> & string;
export default Item;
