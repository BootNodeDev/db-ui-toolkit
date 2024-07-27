import React, { type ButtonHTMLAttributes, type MouseEventHandler, type SVGProps } from 'react'
import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

const Copy: React.FC<SVGProps<SVGSVGElement>> = ({ ...restProps }) => (
  <svg
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      clipRule="evenodd"
      d="M6.91669 6.33335C6.59452 6.33335 6.33335 6.59452 6.33335 6.91669V12.1667C6.33335 12.4889 6.59452 12.75 6.91669 12.75H12.1667C12.4889 12.75 12.75 12.4889 12.75 12.1667V6.91669C12.75 6.59452 12.4889 6.33335 12.1667 6.33335H6.91669ZM5.16669 6.91669C5.16669 5.95019 5.95019 5.16669 6.91669 5.16669H12.1667C13.1332 5.16669 13.9167 5.95019 13.9167 6.91669V12.1667C13.9167 13.1332 13.1332 13.9167 12.1667 13.9167H6.91669C5.95019 13.9167 5.16669 13.1332 5.16669 12.1667V6.91669Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M2.83331 2.24998C2.6786 2.24998 2.53023 2.31144 2.42083 2.42083C2.31144 2.53023 2.24998 2.6786 2.24998 2.83331V8.08331C2.24998 8.23802 2.31144 8.3864 2.42083 8.49579C2.53023 8.60519 2.6786 8.66665 2.83331 8.66665H3.41665C3.73881 8.66665 3.99998 8.92781 3.99998 9.24998C3.99998 9.57215 3.73881 9.83331 3.41665 9.83331H2.83331C2.36918 9.83331 1.92406 9.64894 1.59588 9.32075C1.26769 8.99256 1.08331 8.54744 1.08331 8.08331V2.83331C1.08331 2.36918 1.26769 1.92406 1.59588 1.59588C1.92406 1.26769 2.36918 1.08331 2.83331 1.08331H8.08331C8.54744 1.08331 8.99256 1.26769 9.32075 1.59588C9.64894 1.92406 9.83331 2.36918 9.83331 2.83331V3.41665C9.83331 3.73881 9.57215 3.99998 9.24998 3.99998C8.92781 3.99998 8.66665 3.73881 8.66665 3.41665V2.83331C8.66665 2.6786 8.60519 2.53023 8.49579 2.42083C8.3864 2.31144 8.23802 2.24998 8.08331 2.24998H2.83331Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const Wrapper = styled.button.attrs<{ $variant?: string }>(({ type = 'button' }) => ({
  type,
}))`
  ${({ $variant }) => css`
    align-items: center;
    background: transparent;
    border: none;
    color: var(
      ${cssCustomPropertyName({
        componentName: 'copy-button',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #000
    );
    column-gap: var(
      ${cssCustomPropertyName({
        componentName: 'copy-button',
        customPropertyPrefix: 'base',
        componentVariant: $variant,
        customPropertyName: 'column-gap',
      })},
      var(--base-gap, 8px)
    );
    cursor: pointer;
    display: flex;
    font-family: var(
      ${cssCustomPropertyName({
        componentName: 'copy-button',
        customPropertyPrefix: 'base',
        componentVariant: $variant,
        customPropertyName: 'font-family',
      })},
      var(--base-font-family, sans-serif)
    );
    font-size: 1.5rem;
    font-weight: 400;
    height: fit-content;
    justify-content: center;
    line-height: 1;
    outline: none;
    padding: 0;
    text-decoration: none;
    transition:
      background-color
        var(
          ${cssCustomPropertyName({
            componentName: 'copy-button',
            customPropertyPrefix: 'base',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
          })},
          var(--base-transition-duration-sm, 0.2s)
        ),
      border-color
        var(
          ${cssCustomPropertyName({
            componentName: 'copy-button',
            customPropertyPrefix: 'base',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
          })},
          var(--base-transition-duration-sm, 0.2s)
        ),
      color
        var(
          ${cssCustomPropertyName({
            componentName: 'copy-button',
            customPropertyPrefix: 'base',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
          })},
          var(--base-transition-duration-sm, 0.2s)
        );
    user-select: none;
    white-space: nowrap;
    width: fit-content;

    &:hover {
      color: var(
        ${cssCustomPropertyName({
          componentName: 'copy-button',
          componentVariant: $variant,
          customPropertyName: 'color-hover',
        })},
        #000
      );
    }

    &:active {
      opacity: 0.8;
    }

    &[disabled],
    &[disabled]:hover {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  $variant?: string
}

/**
 * @name CopyButton
 *
 * @description A button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-copy-button-color`
 * - `--theme-copy-button-color-hover`
 *
 * **Base CSS variables:**
 *
 * - `--base-copy-button-column-gap`
 * - `--base-copy-button-font-family`
 * - `--base-copy-button-transition-duration`
 */
const CopyButton: React.FC<Props> = ({
  $variant,
  children = <Copy />,
  onClick,
  value,
  ...restProps
}) => {
  const onCopy: MouseEventHandler<HTMLButtonElement> = (e) => {
    navigator.clipboard.writeText(value)
    onClick && onClick(e)
  }

  return (
    <Wrapper $variant={$variant} onClick={onCopy} {...restProps}>
      {children}
    </Wrapper>
  )
}

export default CopyButton
