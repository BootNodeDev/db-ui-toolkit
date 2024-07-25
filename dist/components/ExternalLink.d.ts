import React, { AnchorHTMLAttributes } from 'react';
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    $variant?: string;
}
/**
 * @name ExternalLink
 *
 * @description A button that opens a link in a new tab.
 *
 * @param {React.HTMLAttributeAnchorTarget} target - The target attribute specifies where to open the linked document. Default is '_blank'.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the ExternalLink icon.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-external-link-button-color`
 * - `--theme-external-link-button-color-hover`
 *
 * **Base CSS variables:**
 *
 * - `--base-external-link-column-gap`
 * - `--base-font-family`
 * - `--base-transition-duration-sm`
 */
declare const ExternalLink: React.FC<Props>;
export default ExternalLink;
