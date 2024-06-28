import React, { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    $strokeWidth?: string;
}
/**
 * Spinner Component - A simple animated spinner.
 *
 * @param {string} [$strokeWidth] - Optional stroke width for the spinner. Default is 8.
 *
 * Theme CSS vars:
 *
 * * --theme-spinner-color
 *
 * Base CSS vars:
 *
 * * --base-spinner-animation-time
 */
declare const Spinner: React.FC<Props>;
export default Spinner;
