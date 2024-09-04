import { type ComponentProps } from 'react'
import { styled, keyframes, css } from 'styled-components'

import { cssCustomPropertyName } from '@/src/utils'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.svg<{ $variant?: string }>`
  ${({ $variant }) => css`
    animation: ${spin}
      var(
        ${cssCustomPropertyName({
          componentName: 'spinner',
          componentVariant: $variant,
          customPropertyName: 'animation-time',
          customPropertyPrefix: 'base',
        })},
        1s
      )
      linear infinite;
    color: var(
      ${cssCustomPropertyName({
        componentName: 'spinner',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #8b46a4
    );
  `}
`

interface Props extends ComponentProps<'svg'> {
  $strokeWidth?: number
  $variant?: string
  $size?: number
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
const Spinner: React.FC<Props> = ({
  $size = 50,
  $strokeWidth = 8,
  $variant,
  ...restProps
}: Props) => (
  <Wrapper
    $variant={$variant}
    height={`${$size}`}
    viewBox="0 0 50 50"
    width={`${$size}`}
    {...restProps}
  >
    <defs>
      <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <circle
      cx="25"
      cy="25"
      fill="none"
      r="20"
      stroke="url(#gradient)"
      strokeLinecap="round"
      strokeWidth={$strokeWidth}
    />
  </Wrapper>
)

export default Spinner
