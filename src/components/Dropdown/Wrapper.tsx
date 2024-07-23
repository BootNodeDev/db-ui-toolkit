import { styled } from 'styled-components'

/**
 * @name Wrapper
 *
 * @description Dropdown main wrapper component
 */
export const Wrapper = styled.div.attrs<{
  $isOpen: boolean
  disabled?: boolean
}>(({ disabled = false, $isOpen = false }) => ({
  className: `${$isOpen ? 'isOpen' : ''} dbuitkDropdown`,
  disabled,
}))`
  outline: none;
  position: relative;
  z-index: 0;

  &.isOpen {
    z-index: 50;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`
