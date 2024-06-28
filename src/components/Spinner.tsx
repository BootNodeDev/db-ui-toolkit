import React, { SVGProps } from 'react'
import { styled, keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.svg`
  animation: ${spin} var(--base-spinner-animation-time, 1s) linear infinite;
  color: var(--theme-spinner-color, #8b46a4);
`

interface Props extends SVGProps<SVGSVGElement> {
  $strokeWidth?: string
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
const Spinner: React.FC<Props> = ({ $strokeWidth = 8, ...restProps }) => (
  <Wrapper viewBox="0 0 50 50" width="50" height="50" {...restProps}>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth={$strokeWidth}
      strokeLinecap="round"
    />
  </Wrapper>
)

export default Spinner
