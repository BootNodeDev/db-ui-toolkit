import React, { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    $strokeWidth?: string;
    $variant?: string;
    $size?: number;
}
/**
 * @name Spinner
 *
 * @description Spinner Component - A simple animated spinner.
 *
 * @param {string} [$strokeWidth] - Optional stroke width for the spinner. Default is 8.
 * @param {number} [$size] - Optional size for the spinner. Default is 50.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-spinner-color`
 *
 * **Base CSS variables:**
 *
 * - `--base-spinner-animation-time`
 */
declare const Spinner: React.FC<Props>;
export default Spinner;
