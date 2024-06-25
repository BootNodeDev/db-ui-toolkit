import React, { AnchorHTMLAttributes } from 'react';
/**
 * ExternalLink component, a button that opens a link in a new tab.
 *
 * @param {React.HTMLAttributeAnchorTarget} target - The target attribute specifies where to open the linked document. Default is '_blank'.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the ExternalLink icon.
 *
 * Theme CSS variables:
 *
 * --theme-external-link-button-color: Color of the link.
 * --theme-external-link-button-color-hover: Color of the link on hover.
 */
declare const ExternalLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>>;
export default ExternalLink;
