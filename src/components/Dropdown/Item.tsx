import { styled } from 'styled-components'

export interface Props {
  closeOnClick?: boolean
  disabled?: boolean
}

const Item = styled.div<Props>`
  align-items: center;
  background-color: var(--theme-dropdown-item-background-color, transparent);
  border-bottom: 1px solid var(--theme-dropdown-item-border-color, #f0f0f0);
  color: var(--theme-dropdown-item-color, #2e3048);
  column-gap: var(--base-gap, 8px);
  cursor: pointer;
  display: flex;
  font-size: var(--base-text-font-size, 14px);
  font-weight: 400;
  justify-content: flex-start;
  line-height: 1.4;
  min-height: 32px;
  overflow: hidden;
  padding: 0 calc(var(--base-gap, 8px) * 2);
  text-decoration: none;
  transition: background-color 0.1s linear;
  user-select: none;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: var(--base-border-radius, 8px);
    border-top-right-radius: var(--base-border-radius, 8px);
  }

  &:last-child {
    border-bottom-left-radius: var(--base-border-radius, 8px);
    border-bottom-right-radius: var(--base-border-radius, 8px);
    border-bottom: none;
  }

  &:hover {
    background-color: var(--theme-dropdown-item-background-color-hover, rgba(0, 0, 0, 0.05));
    border-color: var(--theme-dropdown-item-border-color-hover, #f0f0f0);
    color: var(--theme-dropdown-item-color-hover, #2e3048);
  }

  &:disabled,
  &[disabled] {
    &,
    &:hover {
      background-color: var(--theme-dropdown-item-background-color, transparent);
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &:active {
    opacity: 0.8;
  }
`

Item.defaultProps = {
  className: 'dropdownItem',
  closeOnClick: true,
  disabled: false,
}

export default Item
