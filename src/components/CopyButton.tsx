import { styled } from 'styled-components'
import React, { ButtonHTMLAttributes, MouseEventHandler, SVGProps } from 'react'

const Copy: React.FC<SVGProps<SVGSVGElement>> = ({ ...restProps }) => (
  <svg
    fill="currentColor"
    height="15"
    viewBox="0 0 24 24"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      clipRule="evenodd"
      d="M10 9C9.44771 9 9 9.44771 9 10V21C9 21.5523 9.44771 22 10 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H10ZM15 7V3C15 2.44772 14.5523 2 14 2H3C2.44772 2 2 2.44772 2 3V14C2 14.5523 2.44772 15 3 15H7V10C7 8.34315 8.34315 7 10 7H15ZM17 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H10C8.34315 24 7 22.6569 7 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H14C15.6569 0 17 1.34315 17 3V7Z"
      fillRule="evenodd"
    />
  </svg>
)

const Wrapper = styled.button.attrs(({ className = 'dbuitkCopyButton', type = 'button' }) => ({
  className,
  type,
}))`
  align-items: center;
  background: transparent;
  border: none;
  color: var(--theme-copy-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 1.5rem);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  line-height: 1;
  outline: none;
  padding: 0;
  text-decoration: none;
  transition:
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  user-select: none;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--theme-copy-button-color-hover, #8b46a4);
  }

  &:active {
    opacity: 0.8;
  }
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

/**
 * CopyButton component, a button that copies a value to the clipboard
 *
 * @param {string} value - The value to copy to the clipboard
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick=undefined] - The function to call when the button is clicked. Default is undefined.
 * @param {ReactNode} [children=undefined] - The content of the button. Default is the Copy icon.
 *
 * Theme CSS variables:
 *
 * --theme-copy-button-color: Button color.
 * --theme-copy-button-color-hover: Button color on hover.
 */
const CopyButton: React.FC<Props> = ({ children = <Copy />, onClick, value, ...restProps }) => {
  const onCopy: MouseEventHandler<HTMLButtonElement> = (e) => {
    navigator.clipboard.writeText(value)
    onClick && onClick(e)
  }

  return (
    <Wrapper onClick={onCopy} {...restProps}>
      {children}
    </Wrapper>
  )
}

export default CopyButton
