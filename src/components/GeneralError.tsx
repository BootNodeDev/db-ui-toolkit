import React, { ReactElement } from 'react'
import { styled, css } from 'styled-components'
import { breakpointMediaQuery } from '../utils/breakpoints'

import Card from './Card'

const AlertIcon: React.FC = ({ ...restProps }) => (
  <svg
    fill="none"
    height="80"
    viewBox="0 0 50 50"
    width="80"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      fill="currentColor"
      clipRule="evenodd"
      d="M25 3.35187C13.0441 3.35187 3.35187 13.0441 3.35187 25C3.35187 36.9559 13.0441 46.6481 25 46.6481C36.9559 46.6481 46.6481 36.9559 46.6481 25C46.6481 13.0441 36.9559 3.35187 25 3.35187ZM0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
      fillRule="evenodd"
    />
    <path
      fill="currentColor"
      clipRule="evenodd"
      d="M25.0002 13.9944C25.9257 13.9944 26.6761 14.7447 26.6761 15.6703V24.9999C26.6761 25.9255 25.9257 26.6759 25.0002 26.6759C24.0746 26.6759 23.3242 25.9255 23.3242 24.9999V15.6703C23.3242 14.7447 24.0746 13.9944 25.0002 13.9944Z"
      fillRule="evenodd"
    />
    <path
      fill="currentColor"
      clipRule="evenodd"
      d="M23.3242 34.3297C23.3242 33.4041 24.0746 32.6538 25.0002 32.6538H25.0235C25.9491 32.6538 26.6994 33.4041 26.6994 34.3297C26.6994 35.2553 25.9491 36.0057 25.0235 36.0057H25.0002C24.0746 36.0057 23.3242 35.2553 23.3242 34.3297Z"
      fillRule="evenodd"
    />
  </svg>
)

const Wrapper = styled(Card).attrs({ className: 'dbuitkGenericError' })`
  --theme-generic-error-color-title: var(--theme-color-text-primary, #4b4d60);
  --theme-generic-error-color-text: var(--theme-color-text, #4b4d60);
  --theme-generic-error-color-icon: var(--theme-color-danger, #800);
  --theme-generic-error-color-message-background: #f8f8f8;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: calc(var(--base-gap, 8px) * 4);
  padding-top: calc(var(--base-gap, 8px) * 4);
  row-gap: calc(var(--base-gap, 8px) * 2);
  width: 100%;

  ${breakpointMediaQuery(
    'tabletPortraitStart',
    css`
      max-width: 400px;
    `,
  )}
`

const Icon = styled.div`
  color: var(--theme-generic-error-color-icon);
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  color: var(--theme-generic-error-color-title);
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  padding-bottom: var(--base-gap, 8px);
  text-align: center;
  word-break: break-word;
`

const Message = styled.div`
  background-color: var(--theme-generic-error-color-message-background);
  border-radius: var(--base-border-radius, 8px);
  color: var(--theme-generic-error-color-text);
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
  max-height: 250px;
  overflow: auto;
  padding: calc(var(--base-gap, 8px) * 2);
  position: relative;
  row-gap: calc(var(--base-gap, 8px) * 3);
  width: 100%;
  word-break: break-word;

  p,
  pre {
    margin: 0;
    font-size: inherit;
  }

  a {
    color: var(--theme-generic-error-color-text);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

interface Props {
  actionButton?: ReactElement<HTMLButtonElement>
  icon?: ReactElement
  message?: string | ReactElement
  title?: string
}

/**
 * General error component.
 *
 * @param {ReactElement<HTMLButtonElement>} [actionButton] - Optional action button. Can be used to reload the page, redirect the user somewhere, etc.
 * @param {Array<ReactElement> | ReactElement} [icon] - Optional icon to display. Default is an alert icon.
 * @param {string | ReactElement} [message] - Optional message to display. Default is 'Something went wrong.'
 * @param {string} [title] - Optional title to display. Default is 'Error'.
 *
 * Theme CSS variables:
 *
 * --theme-generic-error-color-title: Color of the title.
 * --theme-generic-error-color-text: Color of the text.
 * --theme-generic-error-color-icon: Color of the icon.
 * --theme-generic-error-color-message-background: Background color of the message.
 */
const GeneralError: React.FC<Props> = ({
  actionButton,
  icon = <AlertIcon />,
  message = 'Something went wrong.',
  title = 'Error',
  ...restProps
}) => {
  return (
    <Wrapper {...restProps}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Message>{message}</Message>
      {actionButton}
    </Wrapper>
  )
}

export default GeneralError
