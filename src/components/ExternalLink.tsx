import { styled } from 'styled-components'
import React, { AnchorHTMLAttributes, SVGProps } from 'react'

const Link: React.FC<SVGProps<SVGSVGElement>> = ({ ...restProps }) => (
  <svg
    fill="currentColor"
    height="12.5"
    viewBox="0 0 10 10"
    width="12.5"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      clipRule="evenodd"
      d="M1.11111 1.11111V8.88892H8.88892V5H10V8.88892C10 9.5 9.5 10 8.88892 10H1.11111C0.494442 10 0 9.5 0 8.88892V1.11111C0 0.5 0.494442 0 1.11111 0H5V1.11111H1.11111ZM6.11111 1.11111V0H10V3.88889H8.88892V1.89444L3.42777 7.35558L2.64444 6.57223L8.10558 1.11111H6.11111Z"
      fillRule="evenodd"
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
