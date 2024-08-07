import React from 'react';
type Width = 'sm' | 'md' | 'lg';
interface Props {
    $variant?: string;
    onClose?: () => void;
    width?: Width | string;
}
/**
 * @name Modal
 * @description Modal component
 *
 * @param {Width} [width='md'] - Optional modal width. Can be 'sm', 'md', 'lg' or a custom string value, i.e.: '100%', '800px', etc.
 * @param {Function} [onClose] - Optional function to close the modal. If provided, a default close button will be shown.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-modal-background-color`
 * - `--theme-modal-border-color`
 * - `--theme-modal-color`
 * - `--theme-modal-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-modal-padding`
 * - `--base-modal-border-radius`
 */
declare const Modal: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}>, Props>, never>> & string;
export default Modal;
