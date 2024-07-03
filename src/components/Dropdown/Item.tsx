import { styled, css } from 'styled-components'
import { ActionStates } from './types'

export interface Props {
  $state?: ActionStates
  disabled?: boolean
}

/**
 * Dropdown item component
 *
 * @param {boolean} [disabled=false] - Disables the dropdown item. Default is false.
 * @param {ActionStates} [$state=undefined] - The state of the item. Defaults to undefined.
 *
 * Theme CSS variables:
 *
 * * --theme-dropdown-item-background-color: Dropdown item background color.
 * * --theme-dropdown-item-border-color: Dropdown item border color.
 * * --theme-dropdown-item-color: Dropdown item text color.
 * * --theme-dropdown-item-background-color-hover: Dropdown item background color on hover.
 * * --theme-dropdown-item-border-color-hover: Dropdown item border color on hover.
 * * --theme-dropdown-item-color-hover: Dropdown item text color on hover.
 * * --theme-dropdown-item-background-color-active: Dropdown item background color when active.
 * * --theme-dropdown-item-border-color-active: Dropdown item border color when active.
 * * --theme-dropdown-item-color-active: Dropdown item text color when active.
 */
const Item = styled.div.attrs<Props>(
  ({ tabIndex = 0, className = 'dbuitkDropdownItem', disabled = false }) => ({
    className,
    disabled,
    tabIndex,
  }),
)`
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
  padding: 0 var(--base-common-padding-xl, 16px);
  text-decoration: none;
  transition: background-color var(--base-animation-time-xs, 0.1s) linear;
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

  &.dropdownItemActive,
  &.dropdownItemActive:hover {
    background-color: var(--theme-dropdown-item-background-color-active, rgba(0, 0, 0, 0.1));
    border-color: var(--theme-dropdown-item-border-color-active, #f0f0f0);
    color: var(--theme-dropdown-item-color-active, #000);
  }

  /**
   * State styles
   */
  &,
  &:hover {
    ${({ $state }) =>
      $state === 'danger'
        ? css`
            color: var(--theme-color-danger, #800);
          `
        : $state === 'ok'
          ? css`
              color: var(--theme-color-ok, #080);
            `
          : $state === 'warning' &&
            css`
              color: var(--theme-color-warning, #cc0);
            `};
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

export default Item
