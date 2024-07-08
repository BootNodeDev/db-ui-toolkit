import { styled } from 'styled-components'

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

  &.fullWidth {
    width: 100%;
  }

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
