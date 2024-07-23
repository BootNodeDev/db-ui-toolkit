import React from 'react'
import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../utils'

const CloseIcon = ({ ...restProps }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M20.3111 18.4444C20.404 18.5373 20.4777 18.6476 20.528 18.769C20.5783 18.8904 20.6041 19.0205 20.6041 19.1519C20.6041 19.2833 20.5783 19.4134 20.528 19.5348C20.4777 19.6562 20.404 19.7665 20.3111 19.8594C20.2182 19.9523 20.1079 20.026 19.9865 20.0763C19.8651 20.1266 19.735 20.1525 19.6036 20.1525C19.4722 20.1525 19.3421 20.1266 19.2207 20.0763C19.0993 20.026 18.989 19.9523 18.8961 19.8594L10.6036 11.5657L2.31108 19.8594C2.12344 20.0471 1.86895 20.1525 1.60358 20.1525C1.33822 20.1525 1.08372 20.0471 0.896083 19.8594C0.708443 19.6718 0.603027 19.4173 0.603027 19.1519C0.603027 18.8866 0.708443 18.6321 0.896083 18.4444L9.18983 10.1519L0.896083 1.85942C0.708443 1.67178 0.603027 1.41729 0.603027 1.15192C0.603027 0.886559 0.708443 0.632064 0.896083 0.444423C1.08372 0.256783 1.33822 0.151367 1.60358 0.151367C1.86895 0.151367 2.12344 0.256783 2.31108 0.444423L10.6036 8.73817L18.8961 0.444423C19.0837 0.256783 19.3382 0.151367 19.6036 0.151367C19.8689 0.151367 20.1234 0.256783 20.3111 0.444423C20.4987 0.632064 20.6041 0.886559 20.6041 1.15192C20.6041 1.41729 20.4987 1.67178 20.3111 1.85942L12.0173 10.1519L20.3111 18.4444Z"
      fill="currentColor"
    />
  </svg>
)

const CloseButton = styled.button.attrs(({ className }) => ({
  'aria-label': 'Close',
  children: <CloseIcon />,
  className: `closeButton ${className}`,
  type: 'button',
}))`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: var(--base-common-padding-xl, 16px);
  top: var(--base-common-padding-xl, 16px);

  &:active {
    opacity: 0.8;
  }
`

type Width = 'sm' | 'md' | 'lg'

const widths: Record<'sm' | 'md' | 'lg', string> = {
  sm: '400px',
  md: '540px',
  lg: '780px',
}

interface Props {
  $variant?: string
  onClose?: () => void
  width?: Width | string
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
const Modal = styled.div.attrs<Props>(({ children, onClose }) => ({
  children: (
    <>
      {children}
      {onClose ? <CloseButton onClick={() => onClose()} /> : null}
    </>
  ),
}))`
  ${({ $variant }) => css`
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'modal',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      #fff
    );
    border-radius: var(
      ${cssCustomPropertyName({
        componentName: 'modal',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
      var(--base-border-radius, 8px)
    );
    border: 1px solid
      var(
        ${cssCustomPropertyName({
          componentName: 'modal',
          componentVariant: $variant,
          customPropertyName: 'border-color',
        })},
        #fff
      );
    box-shadow: var(
      ${cssCustomPropertyName({
        componentName: 'modal',
        componentVariant: $variant,
        customPropertyName: 'box-shadow',
      })},
      0 0 20px 0 rgb(0 0 0 / 8%)
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'modal',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #2e3048
    );
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: var(
      ${cssCustomPropertyName({
        componentName: 'modal',
        componentVariant: $variant,
        customPropertyName: 'padding',
        customPropertyPrefix: 'base',
      })},
      var(--base-common-padding-xl, 16px)
    );
    white-space: normal;
  `}

  ${({ width = 'md' }) => {
    return css`
      width: ${width in widths ? widths[width as Width] : width};
    `
  }}
`

export default Modal
