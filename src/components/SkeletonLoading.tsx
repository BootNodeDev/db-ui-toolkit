import { ComponentProps } from 'react'
import styled, { keyframes, css } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    background-color: var(--theme-skeleton-loading-background-color, #f3f3f3);
  }

  50% {
    background-color: var(--theme-skeleton-loading-background-color-end, #e0e0e0);
  }

  100% {
    background-color: var(--theme-skeleton-loading-background-color, #f3f3f3);
  }
`

interface SkeletonProps extends ComponentProps<'div'> {
  $animate?: boolean
  $animationDuration?: string
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
const SkeletonLoading = styled.div.attrs<SkeletonProps>(
  ({ $animate = true, $animationDuration = '2s' }) => {
    return {
      $animate,
      $animationDuration,
    }
  },
)<SkeletonProps>`
  ${({ $animate, $animationDuration }) => css`
    animation-delay: 0;
    animation-duration: ${$animationDuration};
    animation-iteration-count: infinite;
    animation-name: ${$animate ? loadingAnimation : 'none'};
    animation-timing-function: ease-in-out;
    background-color: var(--theme-skeleton-loading-background-color, #f3f3f3);
    border-radius: var(--base-skeleton-loading-border-radius, var(--base-border-radius, 8px));
    height: 20px;
    width: 50px;
  `}
`

export default SkeletonLoading
