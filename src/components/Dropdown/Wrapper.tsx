import { styled } from 'styled-components'

/**
 * @name Wrapper
 *
 * @description Dropdown main wrapper component
 */
export const Wrapper = styled.div.attrs<{
  $isOpen: boolean
  disabled?: boolean
}>(({ $isOpen = false, disabled = false }) => ({
  className: `${$isOpen ? 'isOpen' : ''} dbuitkDropdown`,
  disabled,
}))`
  display: flex;
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
