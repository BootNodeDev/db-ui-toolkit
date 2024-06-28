import { styled, css } from 'styled-components'
import { Direction, Position } from './index'

interface ItemsProps {
  $direction?: Direction
  $isOpen: boolean
  $position?: Position
}

/**
 * BaseItems component - A generic container for dropdown items. No theming.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 */
export const BaseItems = styled.div.attrs<ItemsProps>(
  ({
    $direction = 'downwards',
    $isOpen = false,
    $position = 'left',
    className = 'dbuitkDropdownItems',
  }) => ({ className, $direction, $isOpen, $position }),
)`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({ $position }) =>
    $position === 'left' &&
    css`
      left: 0;
    `}

  ${({ $position }) =>
    $position === 'right' &&
    css`
      right: 0;
    `}

  ${({ $position }) =>
    $position === 'center' &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $direction }) =>
    $direction === 'downwards' &&
    css`
      top: calc(100% + 10px);
    `}

  ${({ $direction }) =>
    $direction === 'upwards' &&
    css`
      bottom: calc(100%);
    `}
`

/**
 * Items component - A container for dropdown items.
 *
 * @param {boolean} [$isOpen=false] - Whether the dropdown is open. Defaults to false.
 * @param {Position} [$position='left'] - The position of the dropdown. Defaults to 'left'.
 * @param {Direction} [$direction='downwards'] - The direction of the dropdown. Defaults to 'downwards'.
 *
 * Theme CSS Variables:
 *
 * --theme-dropdown-background-color: Dropdown background color.
 * --theme-dropdown-border-color: Dropdown border color.
 * --theme-dropdown-box-shadow: Dropdown box shadow.
 */
const Items = styled(BaseItems)`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
`

export default Items
