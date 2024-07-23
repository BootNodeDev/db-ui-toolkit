import { styled, css } from 'styled-components'
import { Direction, Position } from './index'

interface ItemsProps {
  $direction?: Direction
  $isOpen: boolean
  $position?: Position
}

/**
 * @name BaseItems
 *
 * @description A generic "abstract" container for dropdown items.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 */
export const BaseItems = styled.div.attrs<ItemsProps>(
  ({ $direction = 'downwards', $isOpen = false, $position = 'left' }) => ({
    $direction,
    $isOpen,
    $position,
    className: `${$isOpen ? 'isOpen' : ''} dbuitkDropdownItems`,
  }),
)`
  display: none;
  flex-direction: column;
  max-width: 100vw;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  &.isOpen {
    display: flex;
    opacity: 1;
    transition:
      display var(--base-dropdown-animation-time, var(--base-animation-time-sm, 0.2s)) ease-out
        allow-discrete,
      opacity var(--base-dropdown-animation-time, var(--base-animation-time-sm, 0.2s)) ease-out;
  }

  /* Transitions will start in these states */
  @starting-style {
    &.isOpen {
      opacity: 0;
    }
  }

  ${({ $position }) => {
    return $position === 'left'
      ? css`
          left: 0;
        `
      : $position === 'center'
        ? css`
            left: 50%;
            transform: translateX(-50%);
          `
        : $position === 'right' &&
          css`
            right: 0;
          `
  }}

  ${({ $direction }) => {
    return $direction === 'downwards'
      ? css`
          top: calc(100% + 10px);
        `
      : $direction === 'upwards' &&
          css`
            bottom: calc(100%);
          `
  }}
`

/**
 * @name Items
 *
 * @description Items component - Default container for dropdown items.
 */
const Items = styled.div`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-dropdown-border-radius, var(--base-border-radius, 8px));
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`

export default Items
