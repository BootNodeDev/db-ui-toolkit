/// <reference types="react" />
export interface Props {
    $variant?: string;
    disabled?: boolean;
}
/**
 * @name Item
 *
 * @description Dropdown item component
 *
 * @param {boolean} [disabled=false] - Disables the dropdown item. Default is false.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-item-background-color`
 * - `--theme-dropdown-item-border-color`
 * - `--theme-dropdown-item-color`
 * - `--theme-dropdown-item-background-color-hover`
 * - `--theme-dropdown-item-border-color-hover`
 * - `--theme-dropdown-item-color-hover`
 * - `--theme-dropdown-item-background-color-active`
 * - `--theme-dropdown-item-border-color-active`
 * - `--theme-dropdown-item-color-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-item-transition-duration`
 * - `--base-dropdown-item-padding`
 * - `--base-dropdown-item-column-gap`
 *
 */
declare const Item: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, Props>, never>> & string;
export default Item;
