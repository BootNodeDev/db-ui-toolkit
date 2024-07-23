import { styled } from 'styled-components'

/**
 * @name ButtonWrapper
 *
 * @description Dropdown button wrapper component
 */
export const ButtonWrapper = styled.div.attrs(({ className = 'dbuitkDropdownButton' }) => ({
  className,
}))`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: fit-content;
`
