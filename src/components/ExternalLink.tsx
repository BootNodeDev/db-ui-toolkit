import { styled } from 'styled-components'
import React, { AnchorHTMLAttributes, SVGProps } from 'react'

const Link: React.FC<SVGProps<SVGSVGElement>> = ({ ...restProps }) => (
  <svg
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.41669 4.58335C3.26198 4.58335 3.1136 4.64481 3.00421 4.75421C2.89481 4.8636 2.83335 5.01198 2.83335 5.16669V11.5834C2.83335 11.7381 2.89481 11.8864 3.00421 11.9958C3.1136 12.1052 3.26198 12.1667 3.41669 12.1667H9.83335C9.98806 12.1667 10.1364 12.1052 10.2458 11.9958C10.3552 11.8864 10.4167 11.7381 10.4167 11.5834V8.08335C10.4167 7.76119 10.6779 7.50002 11 7.50002C11.3222 7.50002 11.5834 7.76119 11.5834 8.08335V11.5834C11.5834 12.0475 11.399 12.4926 11.0708 12.8208C10.7426 13.149 10.2975 13.3334 9.83335 13.3334H3.41669C2.95256 13.3334 2.50744 13.149 2.17925 12.8208C1.85106 12.4926 1.66669 12.0475 1.66669 11.5834V5.16669C1.66669 4.70256 1.85106 4.25744 2.17925 3.92925C2.50744 3.60106 2.95256 3.41669 3.41669 3.41669H6.91669C7.23885 3.41669 7.50002 3.67785 7.50002 4.00002C7.50002 4.32219 7.23885 4.58335 6.91669 4.58335H3.41669Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.66669 2.25002C8.66669 1.92785 8.92785 1.66669 9.25002 1.66669H12.75C13.0722 1.66669 13.3334 1.92785 13.3334 2.25002V5.75002C13.3334 6.07219 13.0722 6.33335 12.75 6.33335C12.4279 6.33335 12.1667 6.07219 12.1667 5.75002V2.83335H9.25002C8.92785 2.83335 8.66669 2.57219 8.66669 2.25002Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1625 1.83754C13.3903 2.06535 13.3903 2.43469 13.1625 2.6625L6.74581 9.07917C6.51801 9.30697 6.14866 9.30697 5.92085 9.07917C5.69305 8.85136 5.69305 8.48201 5.92085 8.25421L12.3375 1.83754C12.5653 1.60974 12.9347 1.60974 13.1625 1.83754Z"
      fill="currentColor"
    />
  </svg>
)

const Wrapper = styled.a.attrs(({ className = 'dbuitkExternalLink' }) => ({ className }))<
  AnchorHTMLAttributes<HTMLAnchorElement>
>`
  align-items: center;
  color: var(--theme-external-link-button-color, #000);
  column-gap: var(--base-button-gap, 8px);
  cursor: pointer;
  display: flex;
  font-family: var(--base-font-family, sans-serif);
  font-size: var(--base-button-font-size, 1.5rem);
  font-weight: 400;
  height: fit-content;
  justify-content: center;
  outline: none;
  padding: 0;
  transition:
    background-color var(--base-animation-time-xs, 0.2s),
    border-color var(--base-animation-time-xs, 0.2s),
    color var(--base-animation-time-xs, 0.2s);
  white-space: nowrap;
  width: fit-content;

  &:hover {
    color: var(--theme-external-link-button-color-hover, #8b46a4);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`

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
const ExternalLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children = <Link />,
  target = '_blank',
  ...restProps
}) => {
  return (
    <Wrapper target={target} {...restProps}>
      {children}
    </Wrapper>
  )
}

export default ExternalLink
