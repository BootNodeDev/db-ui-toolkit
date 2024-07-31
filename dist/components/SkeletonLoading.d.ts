import { ComponentProps } from 'react';
interface SkeletonProps extends ComponentProps<'div'> {
    $animate?: boolean;
    $animationDuration?: string;
}
/**
 * @name SkeletonLoading
 *
 * @description A loading skeleton component
 *
 * @param {boolean} [$animate=true] - Whether the loading animation should be displayed. Default is true.
 * @param {string} [$animationDuration='2s'] - The duration of the loading animation. Default is '2s'.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-skeleton-loading-background-color`
 * - `--theme-skeleton-loading-background-color-end`
 *
 * **Base CSS variables:**
 *
 * - `--base-skeleton-loading-border-radius`
 */
declare const SkeletonLoading: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, SkeletonProps>, SkeletonProps>> & string;
export default SkeletonLoading;
